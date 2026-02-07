import Navbar from '@/components/shared/navbar/Navbar';

const MainLayout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  );
};

export default MainLayout;