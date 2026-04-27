const StatusBadge = ({status, text}) => {
  const statusLower = status?.toLowerCase();

  return (
    <>
    {(statusLower === "pending") && 
      <div className={`
        status-badge quickbd-transition 
        bg-info/20 border-info text-info
      `}>
        {text}
      </div>
      }
    {(statusLower === "accepted" || status === "low stock") && 
      <div className={`
        status-badge quickbd-transition 
        bg-warning/20 border-warning text-warning
      `}>
        {text}
      </div>
      }
    {(statusLower === "processing") && 
      <div className={`
        status-badge quickbd-transition 
        bg-purple/20 border-purple text-purple
      `}>
        {text}
      </div>
      }
    {(statusLower === "shipped") && 
      <div className={`
        status-badge quickbd-transition 
        bg-secondary/20 border-secondary text-secondary
      `}>
        {text}
      </div>
      }
    {(statusLower === "delivered" || statusLower === "success" ||
      statusLower === "in stock" || statusLower === "active"
    ) && 
      <div className={`
        status-badge quickbd-transition 
        bg-accent/20 border-accent text-accent
      `}>
        {text}
      </div>
      }
    {(statusLower === "cancelled" || statusLower === "out of stock") && 
      <div className={`
        status-badge quickbd-transition 
        bg-danger/20 border-danger text-danger
      `}>
        {text}
      </div>
      }
    {(statusLower === "inactive") && 
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