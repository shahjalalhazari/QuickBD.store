import { BiMinus, BiTrendingDown, BiTrendingUp } from "react-icons/bi";

const MetricPillCard = ({data}) => {
  return (
    <div className="metric-pill-card">
      <p className="pill-card-label">
        {data.label}
      </p>
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
  );
};

export default MetricPillCard;