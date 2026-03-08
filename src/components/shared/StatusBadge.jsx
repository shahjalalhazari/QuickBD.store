const StatusBadge = ({status, text}) => {

  return (
    <>
    {(status === "pending" || status === "Pending") && 
      <div className={`
        status-badge quickbd-transition 
        bg-info/20 border-info text-info
      `}>
        {text}
      </div>
      }
    {(status === "accepted" || status === "Accepted" ||
      status === "Low Stock" || status === "low stock"
    ) && 
      <div className={`
        status-badge quickbd-transition 
        bg-warning/20 border-warning text-warning
      `}>
        {text}
      </div>
      }
    {(status === "processing" || status === "Processing") && 
      <div className={`
        status-badge quickbd-transition 
        bg-purple/20 border-purple text-purple
      `}>
        {text}
      </div>
      }
    {(status === "shipped" || status === "Shipped") && 
      <div className={`
        status-badge quickbd-transition 
        bg-secondary/20 border-secondary text-secondary
      `}>
        {text}
      </div>
      }
    {(status === "delivered" || status === "Delivered" || 
      status === "success" || status === "Success" ||
      status === "in stock" || status === "In Stock" ||
      status === "active" || status === "Active"
    ) && 
      <div className={`
        status-badge quickbd-transition 
        bg-accent/20 border-accent text-accent
      `}>
        {text}
      </div>
      }
    {(status === "canceled" || status === "Canceled" ||
      status === "out of stock" || status === "Out Of Stock" || status === "Out of Stock"
    ) && 
      <div className={`
        status-badge quickbd-transition 
        bg-danger/20 border-danger text-danger
      `}>
        {text}
      </div>
      }
    {(status === "inactive" || status === "Inactive") && 
      <div className={`
        status-badge quickbd-transition 
        bg-body-color/20 border-body-color text-body-color
      `}>
        {text}
      </div>
      }
    </>
  );
};

export default StatusBadge;