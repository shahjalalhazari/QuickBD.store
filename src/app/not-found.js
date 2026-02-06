import FullWIthBtn from "@/components/shared/buttons/FullWIthBtn";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-404">
      {/* BG SHAPES */}
      <Image 
        src="/shapes/error-page/oval.png" 
        alt="shape" width={195} height={195} 
        className="oval-1"
      />
      <Image 
        src="/shapes/error-page/objects-01.png" 
        alt="shape" width={400} height={250} 
        className="objects-1"
      />
      <Image 
        src="/shapes/error-page/objects-02.png" 
        alt="shape" width={750} height={292} 
        className="objects-2"
      />
      <Image 
        src="/shapes/error-page/oval-2.png" 
        alt="shape" width={59} height={59} 
        className="oval-2  animate-float-y"
      />
      <Image 
        src="/shapes/error-page/oval-3.png" 
        alt="shape" width={63} height={63} 
        className="oval-3  animate-float-x"
      />
			<Image 
        src="/shapes/error-page/oval-4.png" 
        alt="shape" width={111} height={111} 
        className="oval-4 animate-float-diagonal"
      />
      <Image 
        src="/shapes/error-page/oval-5.png" 
        alt="shape" width={167} height={167} 
        className="oval-5  animate-float-y"
      />

      {/* CONTENT */}
      <div className="content">
        <h1 className="error-heading">404</h1>
        <h2 className="error-subheading">PAGE NOT FOUND</h2>
        <p className="error-paragraph">
          Oops! The page you are looking for does not exist.
          It might have been moved or deleted.
        </p>
        <Link href="/" className="back-to-home-btn">
          <FullWIthBtn text="Back to Home" color="bg-secondary" customClass="w-[328px] lg:w-[428px]" />
        </Link>
      </div>
    </div>
  );
}