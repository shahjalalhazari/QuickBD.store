"use client"
import FullWidthBtn from '@/components/customerLayout/shared/buttons/FullWidthBtn';
import BoxInputField from '@/components/shared/inputFields/BoxInputField';
import { useSession } from 'next-auth/react';
import React from 'react';

const AccountDetailsForm = () => {
  const session = useSession();

  const handleAccountDetailsChange = (e) => {
    e.preventDefault();
    console.log("Account Details Form Clicked.");
  }

  return (
    <div className='box-container'>
			<h3 className="box-heading">Account Details</h3>

      <form onSubmit={handleAccountDetailsChange} className='form-layout'>
        <div className="input-grid">
          {/* NAME FIELD */}
          <BoxInputField
            name={"fullName"}
            label={"Full Name"}
            placeholder={"Enter Your Name"}
            defaultValue={session?.data?.user?.name || ""}
          />
          {/* PHONE NUMBER */}
          <BoxInputField
            name={"number"}
            label={"Phone Number"}
            placeholder={"Enter Phone Number"}
            defaultValue='+880 123 451 1231'
          />
        </div>
        {/* EMAIL FIELD */}
        <BoxInputField
          type={"email"}
          name={"email"}
          label={"E-Mail Address"}
          placeholder={"Enter E-mail"}
          defaultValue={session?.data?.user?.email || ""}
        />
        {/* SUBMIT BUTTON */}
        <FullWidthBtn
          color={'bg-secondary'} 
          text={"Save Changes"} 
          customClass={"w-full lg:w-1/3 hover:bg-heading-color"} 
        />
      </form>
			
		</div>
  );
};

export default AccountDetailsForm;