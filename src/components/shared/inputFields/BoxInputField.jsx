const BoxInputField = ({
	type="text", 
	name, required=true, 
	label, placeholder, 
	customClass="",
	defaultValue=""
}) => {
	return (
		<div className="box-input-group">
			<label 
				htmlFor={name}
				className="box-input-label"
			>
				{label} {required && <span>*</span>}
			</label>
			<input 
				type={type}
				name={name}
				placeholder={placeholder}
				required={required}
				className={`box-input-field ${customClass}`}
				defaultValue={defaultValue}
			/>
		</div>
	);
};

export default BoxInputField;