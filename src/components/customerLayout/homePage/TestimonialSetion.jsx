"use client"
import SectionHeading from "../shared/heading/SectionHeading";
import TestimonialCard from "../shared/cards/TestimonialCard";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Shahjalal Hazari",
		img: "/images/users/user-1.jpg",
		location: "Gouripur Bazar, Daudkandi",
    feedback: "Amazing service and super fast delivery!",
  },
  {
    name: "Rahim Uddin",
		img: "/images/users/user-2.jpg",
		location: "Daudkandi Bazar, Daudkandi",
    feedback: "Product quality is really good. Loved it.",
  },
  {
    name: "Savannah Bond",
		img: "/images/users/user-3.jpg",
		location: "Gouripur Bus Stand, Daudkandi",
    feedback: "Very smooth experience from order to delivery.",
  },
  {
    name: "Hasan Ali",
		img: "/images/users/user-5.jpg",
		location: "Daudkandi Bazar, Daudkandi",
    feedback: "Customer support was very helpful.",
  },
  {
    name: "Nusrat Jahan",
    img: "/images/users/user-4.jpg",
    location: "Gouripur Bazar, Daudkandi",
    feedback: "I will definitely order again.",
  },
];


const TestimonialSetion = () => {
	const sliderRef = useRef(null);
  const pausedRef = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const step = () => {
      if (!pausedRef.current) {
        slider.scrollLeft += 0.5;
        const halfWidth = slider.scrollWidth / 2;
        if (slider.scrollLeft >= halfWidth) {
          slider.scrollLeft -= halfWidth;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);


	return (
		<div className="testimonial-section">
			<SectionHeading text={"Trust of | our happy customers"} customClass="text-center"/>

		<div
      ref={sliderRef}
      className="testimonial-slider"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onTouchStart={() => (pausedRef.current = true)}
      onTouchEnd={() => (pausedRef.current = false)}
    >
      {[...testimonials, ...testimonials].map((item, i) => (
        <div className="testimonial-slide" key={i}>
          <TestimonialCard user={item} />
        </div>
      ))}
      </div>
		</div>
	);
};

export default TestimonialSetion;