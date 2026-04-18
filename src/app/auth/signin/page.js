import "./signin.css";
import SignInForm from '@/components/customerLayout/auth/signInPage/SignInForm';
import ImageContainer from '@/components/customerLayout/auth/shared/ImageContainer';
import { SITE_DESCRIPTION, TEMPLATE_NAMES } from "@/app/metadata";
import { Suspense } from "react";
import QuickbdLoading from "@/components/shared/QuickbdLoading";

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
      <Suspense fallback={<QuickbdLoading />}>
        <SignInForm />
      </Suspense>
		</div>
	);
};

export default SignInPage;