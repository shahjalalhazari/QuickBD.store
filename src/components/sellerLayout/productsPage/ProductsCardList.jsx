import ProductCard from "../shared/cards/ProductCard";

const ProductsCardList = ({data}) => {
  
  return (
    <div className='product-card-layout'>
      {data.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsCardList;