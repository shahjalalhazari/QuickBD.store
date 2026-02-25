const UnderlineInput = ({label, type, requred=true, name, placeholder=""}) => {
  return (
    <div className="underline-input-group">
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        required={requred} 
        className="underline-input-field"
      />
      <label htmlFor={name} className="underline-input-label">{label}</label>
    </div>
  );
};

export default UnderlineInput;