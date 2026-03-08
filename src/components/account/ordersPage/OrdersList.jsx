"use client";

import StatusBadge from "@/components/shared/StatusBadge";
import { RiFileList2Line } from "react-icons/ri";

const orderFields = [
  { key: "id", label: "Order Id" },
  { key: "amount", label: "Amount" },
  { key: "date", label: "Date" },
  { key: "items", label: "Total Items" },
  { key: "status", label: "Status" },
  { key: "deliveredDate", label: "Deliveried Date" },
];

const OrdersList = ({orders}) => {

  const handleOrderDetails = () => {
    console.log("Order Details Button Clicked.");
  }


  return (
    <div className="order-list">
  {orders.map((order, index) => (
    <div className="order-card" key={index}>
      {orderFields.map((field) => (
        <div className="order-row" key={field.key}>
          <p className="list-item-label">{field.label}:</p>

          <div className="list-item-value">
            {field.key === "status" ? (
              <StatusBadge status={order.status} text={order.status} />
            ) : (
              order[field.key]
            )}
          </div>
        </div>
      ))}

      {/* Action Button */}
      <div className="order-row">
        <button
          className="details-btn quickbd-transition col-span-5"
          onClick={() => handleOrderDetails(order)}
        >
          View Details
        </button>
      </div>
    </div>
  ))}
</div>
  );
};

export default OrdersList;