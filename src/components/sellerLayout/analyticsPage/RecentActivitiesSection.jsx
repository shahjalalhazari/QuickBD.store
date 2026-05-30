"use client";
import { activities } from '@/utils/tempoData/activityData';
import { useMemo, useState } from 'react';
import { FaBagShopping, FaCircleCheck, FaStar, FaTrash, FaWallet } from 'react-icons/fa6';
import { TbAlertTriangleFilled } from 'react-icons/tb';
import SectionHeader from '../shared/headers/SectionHeader';
import ActivityCard from '../shared/cards/ActivityCard';
import { formatRelativeTime } from '@/utils/formatRelativeTime';
import DashboardPagination from '../shared/filters/DashboardPagination';

const activityMeta = {
  order_created: {
    icon: <FaBagShopping />,
    bg: "bg-info"
  },

  order_delivered: {
    icon: <FaCircleCheck />,
    bg: "bg-success"
  },

  low_stock: {
    icon: <TbAlertTriangleFilled />,
    bg: "bg-danger"
  },

  order_cancelled: {
    icon: <FaTrash />,
    bg: "bg-secondary"
  },

  payment_received: {
    icon: <FaWallet />,
    bg: "bg-primary"
  },

  review_received: {
    icon: <FaStar />,
    bg: "bg-purple"
  }
};

const sortOptions = [
  { value: "all", label: "All" },
  { value: "order_created", label: "New Orders" },
  { value: "order_delivered", label: "Order Delivered" },
  { value: "low_stock", label: "Low Stock" },
  { value: "review_received", label: "New Review" },
  { value: "payment_received", label: "Payment Received" },
  { value: "order_cancelled", label: "Order Canceled" },
];

const RecentActivitiesSection = () => {
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const filteredActivities = useMemo(() => {
    if (selectedSort.value === "all") {
      return activities.slice(0, 10);
    }

    return activities.filter((item) => 
      item.type === selectedSort.value
    ).slice(0, 10);
  }, [selectedSort]);

  const activityMessage = (activity) => {
    switch (activity.type) {

      case "order_created":
        return `${activity.message} #${activity.entityId}`;

      case "order_delivered":
        return `Order #${activity.entityId}, ${activity.message}`;

      case "low_stock":
        return `${activity.message} for "${activity.productName}" only ${activity.stockLeft} left`;

      case "order_cancelled":
        return `Order #${activity.entityId}, ${activity.message}`;

      case "payment_received":
        return `${activity.message} of ৳ ${activity.amount}`;

      case "review_received":
        return `${activity.message} for "${activity.productName}"`;

      default:
        return activity.message;
    }
  };


  return (
    <section className='section-container'>
      {/* SECTION HEADER */}
      <SectionHeader
        heading={"Recent Activity"}
        path={"/seller/analytics"}
        showBtn={false}
      />

      {/* SORT BUTTONS */}
      <div className="filter-btns">
        {sortOptions.map((item) => {
          const isActive = selectedSort.value === item.value;

          return (
            <button
              key={item.value}
              onClick={() => setSelectedSort(item)}
              disabled={isActive === item.value}
              className={`filter-btn quickbd-transition
                ${isActive ? "active-filter-btn" : "inactive-filter-btn"}
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      
      {/* ACTIVITES LIST */}
      <div className="activities-section">
        {filteredActivities.map((data) => {
          const activity = activityMessage(data);
          const activityMetadata = activityMeta[data.type];
          const formatedTime = formatRelativeTime(data.createdAt);

          return (
            <ActivityCard
              key={data.id}
              activity={activity}
              metadata={activityMetadata}
              time={formatedTime}
            />
          );
        })}
      </div>

      {/* PAGINATION */}
      <DashboardPagination  />
    </section>
  );
};

export default RecentActivitiesSection;