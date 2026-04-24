import { IoMdArrowRoundDown, IoMdArrowRoundUp } from 'react-icons/io';

const StatCardTrend = ({value, trend}) => {
  return (
    <div className={`
      stat-card-trend
      ${trend == "up" ? "text-accent" : trend == "down" ? "text-danger" : "text-secondary"}
    `}>
      {value} from last month {
        trend === "up" ? <IoMdArrowRoundUp /> : 
        trend === "down" ? <IoMdArrowRoundDown /> : 
        ""
      }
    </div>
  );
};

export default StatCardTrend;