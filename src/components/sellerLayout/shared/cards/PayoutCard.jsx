import { formatDateTime } from '@/utils/formatDateTime';
import { formatPayoutDate } from '@/utils/formatPayoutDate';
import { getNextPayoutDate } from '@/utils/getNextPayoutDate';
import React from 'react';

const PayoutCard = ({payout}) => {
  const isUpcoming = payout.status === "upcoming";
  const { day, month } = formatPayoutDate(payout.requestDate);
  const paid = formatDateTime(payout.paidDate)
  const nextPayout = getNextPayoutDate();

  return (
    <div className="payout-card quickbd-transition">
      {/* DATE */}
      <div
        className={`payout-date
          ${isUpcoming ? "status-upcoming" : "status-paid"}
        `}
      >
        <span className="payout-day">{day}</span>
        <span className="payout-month">{month}</span>
      </div>

      {/* CONTENT */}
      <div className='payout-content'>
        <h3 className="payout-amount">
          ৳ {payout.amount.toLocaleString()}
        </h3>

        <p className="paid-date">
          {isUpcoming ? `Next Payout in ${nextPayout}` : `Paid on ${paid}`}
          
        </p>
      </div>
    </div>
  );
};

export default PayoutCard;