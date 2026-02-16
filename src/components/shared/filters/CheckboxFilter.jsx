"use client"
import { useState } from "react";

const CheckboxFilter = ({ options, onChange, title }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div className="filter-item">
      {/* HEADING */}
      <h3 className="filter-item-heading">{title}</h3>

      {/* LIST ITEMS */}
      <ul className="filter-item-list">
        {options?.map((option, index) => {
          const isActive = selected === option.value;
          return (
            <li
              key={index}
              onClick={() => handleSelect(option.value)}
              className="list-item"
            >
              {/* LABEL */}
              <span
                className={`list-item-label quickbd-transition ${isActive ? "active-list-item" : "text-body-color"}`}
              >
                {option.label}
              </span>
              {/* BOX */}
              <div
                className={`check-box
                ${isActive? "bg-primary border-primary": "border-border-color" }`}
              >
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckboxFilter;