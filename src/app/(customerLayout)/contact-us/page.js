import Description from "@/components/customerLayout/contactUsPage/Description";
import Breadcrumbs from "@/components/customerLayout/shared/Breadcrumbs";
import "./contact-us.css";
import ContactDetails from "@/components/customerLayout/contactUsPage/ContactDetails";
import ContactFormAndMap from "@/components/customerLayout/contactUsPage/ContactFormAndMap";
import { SITE_DESCRIPTION, SITE_NAME, TEMPLATE_NAMES } from "@/app/metadata";

export const metadata = {
  title: TEMPLATE_NAMES.contact,
  description: `Get in touch with ${SITE_NAME} for any questions, support, or order inquiries. Visit our location in ${process.env.NEXT_PUBLIC_ADDRESS} or contact us by phone or email. We are here to help with all your shopping needs, ${SITE_DESCRIPTION}`,
};

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