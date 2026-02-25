const UnderlineTextarea = ({label, required=true, name, placeholder=" ", rows}) => {
  return (
    <div className="underline-textarea-group">
      <textarea 
        name={name}
        required={required}
        className="underline-textarea-input" 
        rows={rows} 
        placeholder={placeholder}
      />
      <label 
        htmlFor={name}
        className="underline-textarea-label"
      >
        {label}
      </label>
    </div>
  );
};

export default UnderlineTextarea;