// A FORM WITH INPUT FIELD AND A BUTTON AND ICON INSIDE THAT INPUT FIELD.
// MAINLY USE FOR COUPON CODE RELATED FORMS.

const FormWithInputAndBtn = ({
	icon, name, type="text", 
	placeholder, btnText,
	defaultValue="",
	customClass
}) => {
	return (
		<form className={`Form-input-btn ${customClass}`}>
      <div className="Form-input-btn-group">
        <label htmlFor={name} className="Form-input-btn-label">
          {icon}
        </label>
        <input 
          type={type} 
          name={name}
          placeholder={placeholder}
          className="Form-input-btn-input-field"
					defaultValue={defaultValue}
        />
      </div>
      <button 
      type="submit" 
      className="Form-input-btn-apply-btn quickbd-transition"
      >
        {btnText}
      </button>
    </form>
	);
};

export default FormWithInputAndBtn;