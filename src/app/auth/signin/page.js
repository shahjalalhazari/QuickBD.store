import "./signin.css";
import SignInForm from '@/components/auth/signInPage/SignInForm';
import ImageContainer from '@/components/auth/ImageContainer';
import { SITE_DESCRIPTION, TEMPLATE_NAMES } from "@/app/metadata";

export const metadata = {
  title: TEMPLATE_NAMES.signin,
  description: SITE_DESCRIPTION,
};

const SignInPage = () => {
	return (
		<div className='auth-page'>
      {/* IMAGE COINTAINER */}
			<ImageContainer
        bgImg={"/images/products/item-17.jpg"}
        logo={"/images/logo/whiteLogo.png"}
      />
      {/* FORM COINTAINER */}
			<SignInForm />
		</div>
	);
};

export default SignInPage;