import Description from "@/components/contactUsPage/Description";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import "./contact-us.css";
import ContactDetails from "@/components/contactUsPage/ContactDetails";
import ContactFormAndMap from "@/components/contactUsPage/ContactFormAndMap";

const ContactUsPage = () => {
  return (
    <div className="quickbd-container">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact Us" }
          ]}
        />

        {/* MAIN BODY CONTAINER */}
        <div className="contact-us-page">
          {/* TOP ROW - DESCRIPTION SECTION */}
          <Description />
          {/* SECOND ROW - CONTACT DETAILS */}
          <ContactDetails />
          {/* THIRD ROW - FORM & MAP LOCATION */}
          <ContactFormAndMap />
        </div>
    </div>
  );
};

export default ContactUsPage;