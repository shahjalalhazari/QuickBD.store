import PaymentBadge from '@/components/shared/badges/PaymentBadge';
import StatusBadge from '@/components/shared/badges/StatusBadge';
import ViewAllBtn from '@/components/shared/buttons/ViewAllBtn';
import { formatDateTime } from '@/utils/formatDateTime';

const EarningCard = ({earning}) => {
  const {id, orderId, paymentMethod, paymentStatus, orderAmount, commission, earningAmount, earnedDate} = earning;

  return (
    <div className="earning-card">
      <div className="earning-card-header">
        <div className="space-y-1">
          <h4 className="earning-id">#{id}</h4>
          <p className="earning-order-id">Order ID: #{orderId}</p>
        </div>

        <div className="flex md:flex-col gap-2">
          <StatusBadge status={paymentStatus} text={paymentStatus}/>
          <PaymentBadge method={paymentMethod} status={paymentStatus} />
        </div>
      </div>

      {/* BODY CONTENT */}
      <div className="earning-card-body">
        <div className="card-other-info">
          <span>Order Amount</span>
          <span className="font-semibold">৳{orderAmount}</span>
        </div>

        <div className="card-other-info">
          <span>Commission</span>
          <span className="font-semibold">৳{commission}</span>
        </div>

        <div className="card-other-info">
          <span className="text-sm md:text-base">Net Earning</span>
          <span className="net-earning text-sm md:text-base">৳{earningAmount}</span>
        </div>

        <div className="card-other-info">
          <span>Date / Time</span>
          <p className="font-semibold">
            {formatDateTime(earnedDate)}
          </p>
        </div>
      </div>

      {/* CARD FOOTER -  VIEW DETAILS BUTTON */}
      <div className="earning-card-footer quickbd-transition">
        <ViewAllBtn
          text={"View Details"}
          className={"order-view-btn"}
        />
      </div>
    </div>
  );
};

export default EarningCard;