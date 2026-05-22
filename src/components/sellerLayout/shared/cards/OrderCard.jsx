import StatusBadge from '@/components/shared/badges/StatusBadge';
import OrderProcessBtn from '@/components/shared/buttons/OrderProcessBtn';
import ViewAllBtn from '@/components/shared/buttons/ViewAllBtn';
import { getOrderNextStep } from '@/lib/getOrderNextStep';
import { formatDateTime } from '@/utils/formatDateTime';

const OrderCard = ({ order }) => {
  const visibleItems = order.product.slice(0, 2);
  const remaining = order.product.length - 2;

  // GET ORDER NEXT STEP ACTION
  const nextStepAction = getOrderNextStep(order.status)

  return (
    <div className="order-card">
      {/* CARD HEADER - ID, NAME & STATUS */}
      <div className="order-card-header">
        {/* ID & NAME */}
        <div className='space-y-1'>
          <h4 className="order-id">
            {order.id}
          </h4>
          <p className="customer-name">
            {order.customer.name}
          </p>
        </div>

        {/* STATUS BADGE */}
        <StatusBadge
          status={order.status}
          text={order.status}
        />
      </div>

      {/* CARD BODY - ITEMS, PRICE & DATE */}
      <div className="order-card-body">
        {/* ORDER ITEMS */}
        <div className="order-items-grid">
          {visibleItems.map((item) => (
            <p
              key={item.sku}
              className="order-item"
            >
              {item.name} X {item.quantity}
            </p>
          ))}
          
          {/* IF REMAINING ITEMS */}
          {remaining > 0 && (
            <div className="remaining-items">
              <p className="">+{remaining} more Item(s)</p>
              <button className="show-all-btn quickbd-transition">
                Show All
              </button>
            </div>
          )}
        </div>

        {/* DIVIDER */}
        <hr className="order-card-divider" />

        {/* PRICE & DATE */}
        <div className="order-other-info">
          <h5 className="order-price">
            ৳ {order.total.toFixed(2)}
          </h5>
          <p className="order-date">
            {formatDateTime(order.orderDate)}
          </p>
        </div>

        {/* ORDER NEXT STEP BUTTON */}
        {nextStepAction.length > 0 && (
          <div className="order-next-step">
            {nextStepAction.map((action) => (
              <OrderProcessBtn
                key={action}
                nextStep={action}
              />
            ))}
          </div>
        )}
      </div>

      {/* CARD FOOTER -  VIEW DETAILS BUTTON */}
      <div className="order-card-footer quickbd-transition">
        <ViewAllBtn
          text={"View Details"}
          className={"order-view-btn"}
        />
      </div>
    </div>
  );
};

export default OrderCard;