"use client"
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";


const DropdownForRedirect = ({options, width="w-full"}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  const [value, setValue] = useState(options[0]);

  // Set active value based on route
  useEffect(() => {
    const activeOption = options.find((opt) => opt.path === pathname);

    if (activeOption) {
      setValue(activeOption);
    }
  }, [pathname, options]);
  
  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  // LOGOUT HANDLER
  const handleLogout = () => {
    console.log("Logging Out...");
  }

  // HANDLE MENU ITEM SELECT
  const handleSelect = (option) => {
    setOpen(false);
    
    if (option.action === "logout") handleLogout();
    if (option.path) {
      setValue(option);
      router.push(option.path);
    }
  };

  return (
    <div className={`outline-dropdown ${width}`} ref={dropdownRef}>
      {/* DROPDOWN BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="dropdown-btn"
      >
        <span className="dropdown-selected-item">{value.name}</span>
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
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => {handleSelect(option)}}
            className={`dropdown-item quickbg-transition ${
              option.path === pathname ? "active-dropdown-item" : ""
            }`}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownForRedirect;