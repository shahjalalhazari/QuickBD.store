import Image from "next/image";

const TestimonialCard = ({user}) => {
  const {img, name, location, feedback} = user;

  return (
		<div className="testimonial-card">
			<div className="user">
				<Image alt="" src={img} width={75} height={75} className="user-img"/>
				<div className="user-info">
					<h6 className="user-name">{name}</h6>
				<p className="user-location">{location}</p>
				</div>
			</div>
			<p className="feedback">“{feedback}”</p>
		</div>
  );
};

export default TestimonialCard;