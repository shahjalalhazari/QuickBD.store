const TopSellingProductCard = ({product,index}) => {
  return (
    <div className="top-selling-product-card quickbd-transition">
      <div className="number-name">
        <h6 className="serial-number">{index + 1}</h6>
        <div className="name-qty">
          <p>{product.name}</p>
          <span>{product.unitsSold} Unit Sold</span>
        </div>
      </div>

      <p className="revenue">৳ {(product.revenue).toFixed(2)}</p>
    </div>
  );
};

export default TopSellingProductCard;