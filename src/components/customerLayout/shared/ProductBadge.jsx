

const ProductBadge = ({ text, bgColor, textColor }) => {
  return (
    <p className={`badge ${bgColor} ${textColor}`}>{text}</p>
  );
};

export default ProductBadge;