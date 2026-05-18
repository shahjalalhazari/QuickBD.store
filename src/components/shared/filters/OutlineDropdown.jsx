"use client";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const OutlineDropdown = ({ options, value, onChange}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // FALLBACK IF THERE IS NO VALUE
  const selected = value || options?.[0];

  useEffect(() => {
    function handleClickOutside(e){
      if(
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ){
        setOpen(false);
      }
    }
    document.addEventListener( "mousedown", handleClickOutside );
    return () => document.removeEventListener( "mousedown", handleClickOutside );
  }, []);


  return (
    <div 
      className={`outline-dropdown w-full min-w-[150px] md:min-w-40 max-w-40 md:max-w-44`} 
      ref={dropdownRef}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="dropdown-btn"
      >
        <span className="dropdown-selected-item">{selected.label}</span>

        <BiChevronDown
          size={20}
          className={`
            quickbd-transition
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* MENU LIST */}
      <div className={`dropdown-list-container quickbd-transition
          ${ open ? "container-open" : "container-close"}
        `}
      >
        {options.map((option)=>(
          <button
            key={option.value}
            type="button"
            onClick={()=>{ onChange?.(option); setOpen(false); }}
            className={`dropdown-item quickbd-transition
              ${option.value === selected.value ? "active-dropdown-item" : ""}
            `}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OutlineDropdown;
