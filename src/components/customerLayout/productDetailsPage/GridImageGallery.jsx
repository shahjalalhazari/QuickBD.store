"use client";
import InnerImageZoom from 'react-inner-image-zoom';

const GridImageGallery = ({images, title}) => {
  return (
    <div className='grid-img-gallery'>
      {images?.map((image, index) => (
        <InnerImageZoom
          key={index}
          src={image}
          zoomSrc={image}
          zoomType="hover"
          className='grid-image'
        />
      ))}
    </div>
  );
};

export default GridImageGallery;