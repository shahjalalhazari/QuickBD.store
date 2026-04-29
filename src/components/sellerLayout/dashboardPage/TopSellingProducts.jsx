import TopSellingProductCard from '../shared/cards/TopSellingProductCard';
import SectionHeader from '../shared/headers/SectionHeader';
import { topSellingProductsList } from '@/utils/tempoData/topSellingProductsList';

const TopSellingProducts = () => {
  const topProductsList = topSellingProductsList;

  return (
    <section className='section-container'>
      {/* SECTION HEADER */}
      <SectionHeader
        heading={"Top Selling Products"}
        path={"/seller/products"}
      />
      
      {/* TOP SELLING PRODUCTS LIST */}
      <div className="top-selling-products">
        {topProductsList.map((product, index) => (
          <TopSellingProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TopSellingProducts;