"use client";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const OutlineDropdown = ({options}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [value, setValue] = useState(options[0]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="outline-dropdown" ref={dropdownRef}>
      {/* DROPDOWN BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="dropdown-btn"
      >
        <span className="dropdown-selected-item">{value.label}</span>
        <BiChevronDown
          size={22}
          className={`quickbd-transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN CONTAINER */}
      <div
        className={`dropdown-list-container quickbd-transition ${
          open
            ? "container-open"
            : "container-close"
        }`}
      >
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => {
              setValue(option)
              setOpen(false);
            }}
            className={`dropdown-item quickbg-transition ${
              option.value === value.value ? "active-dropdown-item" : ""
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutlineDropdown;