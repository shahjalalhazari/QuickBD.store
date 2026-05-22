"use client"
import DashboardSearchBar from '@/components/shared/filters/DashboardSearchBar';
import OutlineDropdown from '@/components/shared/filters/OutlineDropdown';
import { useState } from 'react';


const SearchBarAndFilters = ({searchPlaceholder, dropdownOne, dropdownTwo}) => {
  const [dropdownOneRange, setDropdownOneRange] = useState(dropdownOne[0]);
  const [dropdownTwoRange, setDropdownTwoRange] = useState(dropdownTwo[0]);

  return (
    <div className="searchbar-filters">
      <DashboardSearchBar 
        placeholder={searchPlaceholder} 
      />
      <div className="dropdown-filters">
        {/* CATEGORY DROPDOWN FILTER */}
        {dropdownOne && <OutlineDropdown
          options={dropdownOne}
          value={dropdownOneRange}
          onChange={setDropdownOneRange}
        />}
        
        {/* STATUS DROPDOWN FILTER */}
        {dropdownTwo && <OutlineDropdown
          options={dropdownTwo}
          value={dropdownTwoRange}
          onChange={setDropdownTwoRange}
        />}
        
      </div>
    </div>
  );
};

export default SearchBarAndFilters;