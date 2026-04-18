import ImageContainer from "@/components/customerLayout/auth/shared/ImageContainer";
import "./signup.css";
import SignUpForm from "@/components/customerLayout/auth/signupPage/SignUpForm";
import { SITE_DESCRIPTION, TEMPLATE_NAMES } from "@/app/metadata";

export const metadata = {
  title: TEMPLATE_NAMES.signup,
  description: SITE_DESCRIPTION,
};


const SignUpPage = () => {
  return (
    <div className='auth-page'>
      {/* FORM COINTAINER */}
      <SignUpForm />
      {/* IMAGE COINTAINER */}
			<ImageContainer
        bgImg={"/images/products/item-20.jpg"}
        logo={"/images/logo/largeLogo.png"}
      />
		</div>
  );
};

export default SignUpPage;