const UnderlineInput = ({
  label, type="text", 
  required=true, name, 
  placeholder="",
  value="", onChange="",
  ...rest}) => {
  return (
    <div className="underline-input-group">
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        required={required} 
        value={value}
        onChange={onChange}
        className="underline-input-field"
        {...rest}
      />
      <label htmlFor={name} className="underline-input-label">{label}</label>
    </div>
  );
};

export default UnderlineInput;