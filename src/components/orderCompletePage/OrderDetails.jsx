import StatusBadge from "../shared/StatusBadge";

const orderDetailsContent = [
  {
    item: "Order Id",
    value: "#20260311",
  },
  {
    item: "Order Date & Time",
    value: "05 Mar, 2026 | 08:00 AM",
  },
  {
    item: "Order Amount",
    value: "৳ 1200",
  },
  {
    item: "Payment Method",
    value: "Mobile Banking",
  },
  {
    item: "Order Status",
    value: "Pending",
  },
]

const OrderDetails = () => {
  return (
    <div className="order-details-list">
      {orderDetailsContent.map((details,index) => (
        <div className="order-detail" key={index}>
          <span className="detail-item">{details.item}:</span>
          {details.item === "Order Status" ? (
            <span className="detail-value">
              <StatusBadge text={"Pending"} status={"pending"} />
            </span>
          ) : (
            <span className="detail-value">{details.value}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;