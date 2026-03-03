import BoxInputField from '../shared/inputFields/BoxInputField';

const ShippingAddressForm = () => {
	return (
		<div className='section-container space-y-6'>
			<h3 className="sub-heading">Shipping Address</h3>
			{/* HOULDING & HOUSE NO FIELD */}
				<BoxInputField
					name={"house"}
					label={"Houlding & House No"}
					placeholder={"Enter Holding & House Number"}
				/>
			<div className="input-grid">
				{/* VILLAGE FIELD */}
				<BoxInputField
					name={"village"}
					label={"Village / Area"}
					placeholder={"Enter Village or Area Name"}
				/>
				{/* NEAREST LANDMARD FIELD */}
				<BoxInputField
					name={"landmark"}
					label={"Nearest Landmark"}
					placeholder={"Nearest Landmark"}
					required={false}
				/>
			</div>
			<div className="input-grid">
				{/* POST OFFICE FIELD */}
				<BoxInputField
					name={"postOffice"}
					label={"Post Office"}
					placeholder={"Enter Your Post Office"}
					defaultValue={"Gouripur"}
				/>
				{/* THANA / UPZILA FIELD */}
				<BoxInputField
					name={"thana"}
					label={"Thana / Upzila"}
					placeholder={"Enter Thana Name"}
					defaultValue={"Daudkandi"}
				/>
			</div>
			<div className="input-grid">
				{/* DISTRICT FIELD */}
				<BoxInputField
					name={"district"}
					label={"District"}
					placeholder={"Your District Name"}
					defaultValue={"Cumilla"}
				/>
				{/* POSTAL CODE FIELD */}
				<BoxInputField
					name={"postalCode"}
					label={"Postal Code"}
					placeholder={"Enter Your Postal Code"}
					defaultValue={"3517"}
				/>
			</div>
		</div>
	);
};

export default ShippingAddressForm;