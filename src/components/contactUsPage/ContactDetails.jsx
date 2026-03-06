import { BsEnvelope, BsShop, BsTelephone } from "react-icons/bs";
import FeatureCard from "../shared/cards/FeatureCard";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <h3 className="header">
        Contact Us
      </h3>

      <div className="details">
        <div className="contact-details-card">
          <div className="icon"><BsShop /></div	>
          <p className="title">Address</p>
          <p className="details">
            <Link
              href={process.env.NEXT_PUBLIC_LOCATION_URL}
              target="_blank"
              className="quickbd-transition"
            >
              {process.env.NEXT_PUBLIC_ADDRESS}
            </Link>
          </p>
        </div>
        <div className="contact-details-card">
          <div className="icon"><BsTelephone /></div>
          <p className="title">Phone Number</p>
          <p className="details quickbd-transition">
            <Link 
              href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER_1}`}
              className="quickbd-transition"
            >
              {process.env.NEXT_PUBLIC_PHONE_NUMBER_1}
            </Link>
            {process.env.NEXT_PUBLIC_PHONE_NUMBER_2 && 
              <Link 
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER_2}`}
                className="quickbd-transition"
              >
                {process.env.NEXT_PUBLIC_PHONE_NUMBER_2}
              </Link>
            }
          </p>
        </div>
        <div className="contact-details-card">
          <div className="icon"><BsEnvelope /></div	>
          <p className="title">Email</p>
          <p className="details quickbd-transition">
            <Link 
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_1}`}
              className="quickbd-transition"
            >
              {process.env.NEXT_PUBLIC_EMAIL_1}
            </Link>
            {process.env.NEXT_PUBLIC_EMAIL_2 && 
              <Link 
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_2}`}
                className="quickbd-transition"
              >
                {process.env.NEXT_PUBLIC_EMAIL_2}
              </Link>
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;