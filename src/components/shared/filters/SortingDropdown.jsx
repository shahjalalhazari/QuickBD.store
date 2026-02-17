"use client";
import { useEffect, useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const SortingDropdown = ({title, options}) => {
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
    <div className="quickbd-dropdown" ref={dropdownRef}>
      <p className='filter-item-heading'>{title}</p>
      {/* DROPDOWN BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="dropdown-btn"
      >
        <span className="dropdown-selected-item">{value.label}</span>
        <BiChevronDown
          size={20}
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

export default SortingDropdown;




      {/* <select
        className="sorting-dropdown list-items-container quickbd-transition"
      >
        {options?.map((option, index) => (
          <option 
            key={index} 
            value={option.value} 
            className='dropdown-option'
          >
            {option.label}
            </option>
        ))}
      </select> */}






  //     const [isOpen, setIsOpen] = useState(false);

  // return (
  //   <div className="quickbd-dropdown">
  //     <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
  //       <h5 className="dropdown-label">{title}</h5>
  //       <label
  //         className={`text-xl quickbd-transition ${
  //           isOpen ? "rotate-180" : "rotate-0"
  //         }`}
  //       >
  //         <BiChevronDown />
  //       </label>
  //     </div>

  //     <div
  //       className={`dropdown-list-container quickbd-transition ${
  //         isOpen ? "container-open" : "container-close"
  //       }`}
  //     >
  //       <ul className="dropdown-items">
  //         {options?.map((option, index) => (
  //           <li className="dropdown-item quickbd-transition" key={index}>
  //             <span>{option.label}</span>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );