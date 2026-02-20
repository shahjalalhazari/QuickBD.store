"use client"
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Image from 'next/image';

const ImageGallery = ({images, title}) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [enableLoop, setEnableLoop] = useState(false);

  useEffect(() => {
    let minImgsForLoop = 6;

    if (!images || images.length === 0) {
      return;
    };

    if (window.innerWidth < 640) {
      minImgsForLoop = 4;
    } else if (window.innerWidth < 768) {
      minImgsForLoop = 5;
    }
    
    // IF IMAGES ARE 6 OR MORE, ENABLE LOOP.
    setEnableLoop(images.length >= minImgsForLoop);
  }, [images.length]);


  return (
    <div className="images-gallery">
      {/* ACTIVE IMAGE */}
      <div className="active-img">
        <InnerImageZoom
          src={activeImage}
          zoomSrc={activeImage}
          zoomType="hover"
        />
      </div>

      {/* IMAGE SLIDER */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={8}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        // breakpoints={{
        //   0: { slidesPerView: 4 },
        //   640: { slidesPerView: 4 },
        //   768: { slidesPerView: 4 },
        //   1024: { slidesPerView: 4 },
        // }}
        slidesPerView={4}
        loop={enableLoop}
        autoplay={{ delay: 15000 }}
        className="slider-images"
        onSlideChange={(swiper) => setActiveImage(images[swiper.realIndex])}
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={title}
              width={50}
              height={50}
              className={`quickbd-transition slider-image ${
                activeImage === img
                  ? "border-primary"
                  : "border-border-color opacity-70"
              }`}
              onClick={() => setActiveImage(img)}
            />
          </SwiperSlide>
        ))}

        {/* SLIDE NAVIGATION BTNs */}
        <div className="slider-btns">
          <button
            ref={prevRef}
            className="left-0 md:left-2 lg:left-4 slider-nav-btn"
          >
            <FaChevronLeft className="slider-btn" />
          </button>
          <button
            ref={nextRef}
            className="right-0 md:right-2 lg:right-4 slider-nav-btn"
          >
            <FaChevronRight className="slider-btn" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default ImageGallery;