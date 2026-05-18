import React from "react";

const PaymentBadge = ({method, status}) => {
  const statusLower = status?.toLowerCase();

  return (
    <React.Fragment>
      {/* PENDING */}
      {(statusLower === "pending") && 
        <div className={`
          payment-badge quickbd-transition 
          bg-warning/20 border-warning
        `}>
          {method}
        </div>
        }
      {/* PAID */}
      {(statusLower === "paid") && 
        <div className={`
          payment-badge bg-accent/20 border-accent
        `}>
          {method}
        </div>
      }
      {/* REFUNDED */}
      {(statusLower === "refunded") && 
        <div className={`
          payment-badge bg-danger/20 border-danger
        `}>
          {method}
        </div>
      }
    </React.Fragment>
  );
};

export default PaymentBadge;