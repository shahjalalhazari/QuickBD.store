import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';

const MainLayout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;