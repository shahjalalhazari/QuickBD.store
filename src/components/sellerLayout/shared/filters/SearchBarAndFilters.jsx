"use client"
import DashboardSearchBar from '@/components/shared/filters/DashboardSearchBar';
import OutlineDropdown from '@/components/shared/filters/OutlineDropdown';
import { useState } from 'react';


const SearchBarAndFilters = ({searchPlaceholder, dropdownOne=[], dropdownTwo=[]}) => {
  const [dropdownOneRange, setDropdownOneRange] = useState(dropdownOne[0] || null);
  const [dropdownTwoRange, setDropdownTwoRange] = useState(dropdownTwo[0] || null);

  return (
    <div className="searchbar-filters">
      <DashboardSearchBar 
        placeholder={searchPlaceholder} 
      />
      <div className="dropdown-filters">
        {/* CATEGORY DROPDOWN FILTER */}
        {dropdownOne?.length > 0 && <OutlineDropdown
          options={dropdownOne}
          value={dropdownOneRange}
          onChange={setDropdownOneRange}
        />}
        
        {/* STATUS DROPDOWN FILTER */}
        {dropdownTwo?.length > 0 && <OutlineDropdown
          options={dropdownTwo}
          value={dropdownTwoRange}
          onChange={setDropdownTwoRange}
        />}
        
      </div>
    </div>
  );
};

export default SearchBarAndFilters;