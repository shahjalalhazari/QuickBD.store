import { activities } from '@/utils/tempoData/activityData';
import SectionHeader from '../shared/headers/SectionHeader';
import { FaBagShopping, FaCircleCheck, FaStar, FaTrash, FaWallet } from 'react-icons/fa6';
import { TbAlertTriangleFilled } from 'react-icons/tb';
import ActivityCard from '../shared/cards/ActivityCard';
import { formatRelativeTime } from '@/utils/formatRelativeTime';

const activityMeta = {
  order_created:{
    icon: <FaBagShopping />,
    bg: "bg-info"
  },

  order_delivered:{
    icon: <FaCircleCheck />,
    bg:"bg-success"
  },

  low_stock:{
    icon: <TbAlertTriangleFilled />,
    bg:"bg-danger"
  },

  order_cancelled:{
    icon: <FaTrash />,
    bg:"bg-secondary"
  },

  payment_received:{
    icon: <FaWallet />,
    bg:"bg-primary"
  },

  review_received:{
    icon: <FaStar />,
    bg:"bg-purple"
  }
}


const RecentActivity = () => {
  const activityData = activities.slice(0,5);

  const activityMessage = (activity)=>{
    switch(activity.type){

      case "order_created":
        return `${activity.message} #${activity.entityId}`

      case "order_delivered":
        return `Order #${activity.entityId}, ${activity.message}`

      case "low_stock":
        return `${activity.message} for "${activity.productName}" only ${activity.stockLeft} left`

      case "order_cancelled":
        return `Order #${activity.entityId}, ${activity.message}`

      case "payment_received":
        return `${activity.message} of ৳ ${activity.amount}`

      case "review_received":
        return `${activity.message} for "${activity.productName}"`

      default:
        return activity.message
    }
  }

  return (
    <section className='section-container'>
      {/* SECTION HEADER */}
      <SectionHeader
        heading={"Recent Activity"}
        path={"/seller/analytics"}
      />
      
      {/* ACTIVITES LIST */}
      <div className="recent-activites">
        {activityData.map((data) => {
          const activity = activityMessage(data);
          const activityMetadata = activityMeta[data.type];
          const formatedTime = formatRelativeTime(data.createdAt);

          return(
            <ActivityCard 
              key={data.id} 
              activity={activity} 
              metadata={activityMetadata}
              time={formatedTime}
            />
            )
        })}
      </div>
    </section>
  );
};

export default RecentActivity;