import React from "react";

const PaymentBadge = ({method, status}) => {
  const statusLower = status?.toLowerCase();

  return (
    <React.Fragment>
      {/* PENDING OR UNPAID */}
      {(statusLower === "pending") && 
        <div className={`payment-badge bg-warning/20 border-warning`}>
          {method}
        </div>
        }
      {/* PAID */}
      {(statusLower === "paid") && 
        <div className={`payment-badge bg-accent/20 border-accent`}>
          {method}
        </div>
      }
      {/* REFUNDED OR CANCELLER */}
      {(statusLower === "refunded") && 
        <div className={`payment-badge bg-danger/20 border-danger`}>
          {method}
        </div>
      }
    </React.Fragment>
  );
};

export default PaymentBadge;