import Footer from '@/components/customerLayout/shared/footer/Footer';
import Navbar from '@/components/customerLayout/shared/navbar/Navbar';

const CustomerLayout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer />
    </>
  );
};

export default CustomerLayout;