import { BiMinus, BiTrendingDown, BiTrendingUp } from "react-icons/bi";

const MetricPillCard = ({data}) => {
  return (
    <div className="metric-pill-card">
      <div className="card-row">
        <span className="pill-card-label">
          {data.label}
        </span>
        <span className="text-lg">{data.icon}</span>
      </div>
      <div className="card-row">
        <h3 className="pill-card-value">
        {data.value.toLocaleString()}
      </h3>
      <p className={`pill-card-trend ${data.trendGoing == "up" ? "trend-up" : 
          data.trendGoing == "down" ? "trend-down" :
          "trend-stable"}`}>
        {data.trendGoing == "up" ? <BiTrendingUp /> : 
          data.trendGoing == "down" ? <BiTrendingDown /> :
          <BiMinus />
        }
        {data.trend}
      </p>
      </div>
    </div>
  );
};

export default MetricPillCard;