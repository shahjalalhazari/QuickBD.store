import StatCard from "../shared/cards/StatCard";

const StatCards = ({statCardData}) => {
  return (
    <section className="stat-card-grid">
      {statCardData.map((item) => (
        <StatCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export default StatCards;