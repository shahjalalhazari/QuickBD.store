import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";

const ProductRating = ({ rating, size = {}, showCount=false }) => {
  const renderStars = () => {
    const totalStars = 5;

    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (rating >= i) {
        // Full star
        stars.push(<FaStar key={i} className="text-primary" size={size} />);
      } else if (rating > i - 1) {
        // Half star
        stars.push(<FaStarHalfStroke key={i} className="text-primary" size={size} />);
      } else {
        // Empty star
        stars.push(<FaRegStar key={i} className="text-body-color" size={size} />);
      }
    }
    return stars;
  };

  return (
    <div className={`flex items-center space-x-1 text-body-color font-medium`}>
      {renderStars()}
      {showCount && <span className={`text-info text-sm ml-2`}>&#40;5 Reviews&#41;</span>}
    </div>
  );
};

export default ProductRating;