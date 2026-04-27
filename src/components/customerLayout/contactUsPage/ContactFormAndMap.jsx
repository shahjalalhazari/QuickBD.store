import React from 'react';
import BoxInputField from '../../shared/inputFields/BoxInputField';
import BoxTextareaField from '../../shared/inputFields/BoxTextareaField';
import FullWidthBtn from '../../shared/buttons/FullWidthBtn';

const ContactFormAndMap = () => {
  return (
    <div className='form-map'>
      <form className="contact-form">
        {/* NAME INPUT FIELD */}
        <BoxInputField 
          label={"Full Name"} 
          name={"name"} 
          placeholder={"Your Name"}
        />
        {/* EMAIL INPUT FIELD */}
        <BoxInputField 
          label={"E-Mail Address"} 
          name={"email"} 
          placeholder={"Your E-Mail"}
          type='email'
        />
        {/* MESSGE INPUT FIELD */}
        <BoxTextareaField 
          label={"Message"} 
          placeholder={"Write Your Message"} 
          name={"message"} 
        />
        {/* BUTTON */}
        <FullWidthBtn 
          text={"Send Message"} 
          color={"bg-secondary"} 
          customClass={"w-full hover:bg-heading-color"}
        />
      </form>
      <div className="map-location">
        <iframe
          src={process.env.NEXT_PUBLIC_LOCATION_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 12 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactFormAndMap;