"use client"
import StatusBadge from "@/components/shared/badges/StatusBadge";
import { RiFileList2Line } from "react-icons/ri";

// THIS TABLE LIST COMPONENT IS ONLY FOR LARGE DEVICES.

const OrderListTable = ({orders}) => {
  const handleOrderDetails = () => {
    console.log("Order Details Button Clicked.");
  }

  return (
    <div className="order-list-table">
      <div className="table-header">
        <p>Order Id</p>
        <p>Amount</p>
        <p>Date</p>
        <p>Total Items</p>
        <p>Status</p>
        <p>Deliveried Date</p>
        <p>Action</p>
      </div>

      <div className="order-list-items">
        {orders.map((order, index) => {

          return (
            <div className="order-item-row" key={index}>
              <p>{order.id}</p>
              <p>{order.amount}</p>
              <p>
                {order.date.split("|").map((line, i) => (
                  <span key={i} className="block">
                    {line.trim()}
                  </span>
                ))}
              </p>
              <p>{order.items} Items</p>
              <StatusBadge
                status={order.status}
                text={order.status}
              />
              <p>
                {order.deliveredDate.split("|").map((line, i) => (
                  <span key={i} className="block">
                    {line.trim()}
                  </span>
                ))}
              </p>
              <button
                className="details-btn quickbd-transition"
                title="Click to show details"
                onClick={() => handleOrderDetails(order)}
              >
                <RiFileList2Line />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderListTable;