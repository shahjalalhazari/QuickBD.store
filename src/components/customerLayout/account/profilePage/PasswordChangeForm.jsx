"use client";

import FullWidthBtn from "@/components/customerLayout/shared/buttons/FullWidthBtn";
import BoxInputField from "@/components/shared/inputFields/BoxInputField";
import BoxPasswordInputField from "@/components/shared/inputFields/BoxPasswordInputField";

const PasswordChangeForm = () => {
  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log("Password Change Form Clicked.");
  }

  return (
    <div className='box-container px-8'>
			<h3 className="box-heading">Change Password</h3>

      <form onSubmit={handlePasswordChange} className='form-layout'>
        {/* CURRENT PASSWORD FIELD */}
        <BoxPasswordInputField
          name={"password"}
          label={"Current Password"}
          placeholder={"Enter Current Password"}
        />
        <div className="input-grid">
          {/* NEW PASSWORD FIELD */}
          <BoxPasswordInputField
            name={"newPassword"}
            label={"New Password"}
            placeholder={"Enter New Password"}
          />
          {/* CONFIRM NEW PASSWORD */}
          <BoxPasswordInputField
            name={"confirmPasswrd"}
            label={"Confirm New Password"}
            placeholder={"Re-enter New Password"}
          />
        </div>

        <FullWidthBtn
          color={'bg-secondary'} 
          text={"Changes Password"} 
          customClass={"w-full lg:w-1/3 hover:bg-heading-color"} 
        />
      </form>
			
		</div>
  );
};

export default PasswordChangeForm;