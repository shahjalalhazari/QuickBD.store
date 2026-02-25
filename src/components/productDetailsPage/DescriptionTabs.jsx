"use client";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import FullWidthBtn from "../shared/buttons/FullWidthBtn";
import UnderlineInput from "../shared/inputFields/UnderlineInput";
import UnderlineTextarea from "../shared/inputFields/UnderlineTextarea";
import Image from "next/image";
import ProductRating from "../shared/ProductRating";
import { formatDateTime } from "@/utils/formatDateTime";


const tabs = ["description", "reviews", "faqs"];

const DescriptionTabs = ({product}) => {
  const [activeTab, setActiveTab] = useState("description");
  const [direction, setDirection] = useState("right");
  const [ratingValue, setRatingValue] = useState(0);

  const handleTabChange = (tab) => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = tabs.indexOf(tab);

    setDirection(nextIndex > currentIndex ? "right" : "left");
    setActiveTab(tab);
  };

  const reviewHandler = async (event) => {
    event.preventDefault();
    console.log("Form Submitted!");
  }

  return (
    <div className="tabs-section">
      {/* TAB BUTTONS */}
      <div className="tab-btns">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`tab quickbd-transition ${
              activeTab === tab
                ? "active-tab"
                : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

        {/* CONTENTS */}
        <div className="sliding-contents">
          <div
            key={activeTab}
            className={`transition-all duration-500 ${
              direction === "right"
                ? "animate-slide-right"
                : "animate-slide-left"
            }`}
          >
            {/* PRODUCT DESCRIPTION */}
            {activeTab === "description" && (
              <div className="desc">
                <p>{product.description}</p>
                <br />
                <p><span>Return Policy:</span>{ product.returnPolicy }.</p>
                <p><span>Warranty Info:</span>{ product.warrantyInformation }.</p>
                <p><span>Shipping Info:</span>{ product.shippingInformation }.</p>
                <p>
                  <span>Dimensions (cm):</span>
                  { product.dimensions.width } X { product.dimensions.height } X { product.dimensions.depth }
                </p>
              </div>
            )}

            {/* PRODUCT REVIEWS */}
            {activeTab === "reviews" && (
              <div className="review-tab">
                <div className="review-list">
                  {product.reviews?.map((review, index) => (
                    <div className="review" key={index}>
                      <div className="user">
                        <Image 
                          src={"/images/users/user-1.jpg"} 
                          alt="" 
                          width={50} 
                          height={50} 
                          className="user-photo"
                        />
                        <div className="user-date">
                          <div className="user-details">
                            <h6 className="user-name">{review.reviewerName}</h6>
                            <ProductRating rating={review.rating} size={16}/>
                          </div>
                          <p className="date">{formatDateTime(review.date)}</p>
                        </div>
                      </div>
                      <p className="body-text w-full">{review.comment}</p>
                    </div>
                  ))}
                </div>
                <div className="review-form-section">
                  <h5 className="form-heading">Give us your opinion</h5>
                  <form className="review-from" onSubmit={reviewHandler}>
                    {/* NAME FIELD */}
                    <UnderlineInput 
                      label={"Your Name"}
                      name={"name"}
                      type={"text"}
                    />
                    {/* REVIEW FIELD */}
                    <UnderlineTextarea 
                      label={"Write Your Review"} 
                      name={"feedback"}
                      rows={1}
                    />
                    {/* RATING STARS */}
                    <Rating
                      emptySymbol={<FaRegStar />}
                      fullSymbol={<FaStar />}
                      fractions={2}
                      onClick={newValue => {setRatingValue(newValue)}}
                      initialRating={ratingValue}
                      className={`
                        rating-stars quickbd-transition 
                        ${ratingValue > 0 ? "text-primary" : "text-body-color"}
                      `}
                    />
                    <FullWidthBtn text={"Submit Review"} color={"bg-secondary"} customClass={"hover:bg-heading-color uppercase"} />
                  </form>
                </div>
              </div>
            )}

            {activeTab === "faqs" && (
              <>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title font-semibold">How do I create an account?</div>
                  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title font-semibold">How do I update my profile information?</div>
                  <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
  );
};

export default DescriptionTabs;