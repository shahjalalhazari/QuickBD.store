import Image from "next/image";
import Link from "next/link";

const ImageContainer = ({bgImg, logo}) => {
  return (
    <div className="image-container">
      <Image
        src={bgImg}
        width={700} 
        height={600}
        alt='Sign In Image' 
        className='signin-image quickbd-transition'
      />
      <Image
        src={logo} 
        width={200} 
        height={60}
        alt='QuickBD.store Logo' 
        className='logo'
      />
      <Link href={"/"}>
        <button className="full-width-btn quickbd-transition home-page-btn">
          Go to Home Page
        </button>
      </Link> 
    </div>
  );
};

export default ImageContainer;