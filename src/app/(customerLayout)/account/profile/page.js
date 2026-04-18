import PasswordChangeForm from "@/components/customerLayout/account/profilePage/PasswordChangeForm";
import "./profile.css";
import AccountDetailsForm from '@/components/customerLayout/account/profilePage/AccountDetailsForm';
import { SITE_DESCRIPTION, TEMPLATE_NAMES } from "@/app/metadata";

export const metadata = {
  title: TEMPLATE_NAMES.account,
  description: SITE_DESCRIPTION,
};

const ProfilePage = () => {
  return (
    <div className='profile-page'>
      {/* ACCOUNT DETAILS CHANGE FORM */}
      <AccountDetailsForm />
      {/* PASSWORD CHANGE FORM */}
      <PasswordChangeForm />
    </div>
  );
};

export default ProfilePage;