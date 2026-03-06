import PasswordChangeForm from "@/components/account/profilePage/PasswordChangeForm";
import "./profile.css";
import AccountDetailsForm from '@/components/account/profilePage/AccountDetailsForm';

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