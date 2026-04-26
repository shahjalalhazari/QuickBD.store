import StatCard from "../shared/cards/StatCard";

const StatCards = ({statCardData}) => {
  return (
    <div className="stat-card-grid">
      {statCardData.map((item) => (
        <StatCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default StatCards;