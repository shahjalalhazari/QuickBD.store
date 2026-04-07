"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Unauthorized() {
  const router = useRouter();

  return (
    <div className="not-found-404">
      {/* BG SHAPES */}
      <Image 
        src="/shapes/error-page/Oval.png" 
        alt="shape" width={195} height={195} 
        className="oval-1"
      />
      <Image 
        src="/shapes/error-page/Objects-01.png" 
        alt="shape" width={400} height={250} 
        className="objects-1"
      />
      <Image 
        src="/shapes/error-page/Objects-02.png" 
        alt="shape" width={750} height={292} 
        className="objects-2"
      />
      <Image 
        src="/shapes/error-page/Oval-2.png" 
        alt="shape" width={59} height={59} 
        className="oval-2 animate-float-y"
      />
      <Image 
        src="/shapes/error-page/Oval-3.png" 
        alt="shape" width={63} height={63} 
        className="oval-3 animate-float-x"
      />
      <Image 
        src="/shapes/error-page/Oval-4.png" 
        alt="shape" width={111} height={111} 
        className="oval-4 animate-float-diagonal"
      />
      <Image 
        src="/shapes/error-page/Oval-5.png" 
        alt="shape" width={167} height={167} 
        className="oval-5 animate-float-y"
      />

      {/* CONTENT */}
      <div className="content">
        <h1 className="error-heading">403</h1>
        <h2 className="error-subheading">ACCESS DENIED</h2>
        <p className="error-paragraph">
          Sorry, you do not have permission to access this page.
          Please check your account or return to the homepage.
        </p>
        <div className="back-to-home-btn">
          <button
            onClick={() => router.back()}
            className={`full-width-btn quickbd-transition bg-secondary text-white w-[328px] lg:w-[428px]`}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
