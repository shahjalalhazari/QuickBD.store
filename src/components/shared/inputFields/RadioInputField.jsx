import { FaCheck } from "react-icons/fa6";

const RadioInputField = ({
  option, 
  selected, 
  setSelected,
}) => {
  return (
    <label 
      className={`radio-option quickbd-transition
        ${option.value === selected && "selected-option"}
      `}>
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name={option.name}
          value={option.value}
          checked={selected === option.value}
          onChange={() => setSelected(option.value)}
          className="hidden peer"
      />
        {/* CUSTOM CIRCLE WITH CHECK MARK */}
        <div className="outer-circle peer-checked:border-primary">
          {selected === option.value && 
            <FaCheck size={10} className="check-mark"/>
          }
        </div>
        
        {/* LABEL */}
        <span className="option-label">
          {option.name}
          <span className="helper-text"> ({ option.helperText })</span>
        </span>
      </div>
      {/* SECONDARY TEXT */}
      <span className="secondary-text">
        {option.SecondaryText && option.SecondaryText}
      </span>
    </label>
  );
};

export default RadioInputField;