const BoxTextareaField = ({
	name, required=true, 
	label, placeholder, 
	customClass="",
	defaultValue="",
  rows=5
}) => {
  return (
    <div className="box-input-group">
			<label 
				htmlFor={name}
				className="box-input-label"
			>
				{label} {required && <span>*</span>}
			</label>
      <textarea 
        name={name} 
        placeholder={placeholder} 
        className={`box-textarea-field ${customClass}`}
        defaultValue={defaultValue}
        required={required}
        rows={rows}
      />
		</div>
  );
};

export default BoxTextareaField;