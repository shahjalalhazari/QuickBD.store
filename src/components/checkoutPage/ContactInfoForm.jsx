import BoxInputField from "../shared/inputFields/BoxInputField";

const ContactInfoForm = () => {
	return (
		<div className='section-container space-y-6'>
			<h3 className="sub-heading">Contact Information</h3>
			<div className="input-grid">
				{/* NAME FIELD */}
				<BoxInputField
					name={"fullName"}
					label={"Full Name"}
					placeholder={"Enter Your Name"}
				/>
				{/* PHONE NUMBER */}
				<BoxInputField
					name={"number"}
					label={"Phone Number"}
					placeholder={"Enter Phone Number"}
				/>
			</div>
			<BoxInputField
				name={"email"}
				label={"E-Mail Address"}
				placeholder={"Enter E-mail"}
			/>
		</div>
	);
};

export default ContactInfoForm;