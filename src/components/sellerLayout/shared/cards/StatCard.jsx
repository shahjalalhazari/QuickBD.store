import StatCardTrend from "./StatCardTrend";


const StatCard = ({ data }) => {
  const iconBg = `bg-${data.intent}/20` || "bg-primary/20";
  const iconColor = `text-${data.intent}` || "text-primary/20";

  return (
    <div className='stat-card quickbd-transition'>
      <div className={`icon ${iconBg} ${iconColor}`}>
        { data.icon }
      </div>
      <div className="data">
        <p className='label'>{ data.label }</p>
        <h6 className='value'>{data.value }</h6>
        <StatCardTrend 
          value={data.change} 
          trend={data.trend} 
          intent={data.intent} 
        />
      </div>
    </div>
  );
};

export default StatCard;