const FeatureCard = ({icon, title, details}) => {
	return (
		<div>
			<div className="feature-card">
				<div className="icon">{icon}</div	>
				<h5 className="title">{title}</h5>
				<p className="details">{details}</p>
			</div>
		</div>
	);
};

export default FeatureCard;