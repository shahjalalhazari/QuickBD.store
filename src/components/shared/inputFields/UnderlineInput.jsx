const UnderlineInput = ({
  label, type="text", 
  required=true, name, 
  placeholder=""}) => {
  return (
    <div className="underline-input-group">
      <input 
        type={type} 
        name={name} id={name}
        placeholder={placeholder} 
        required={required}
        className="underline-input-field"
      />
      <label htmlFor={name} className="underline-input-label">{label}</label>
    </div>
  );
};

export default UnderlineInput;