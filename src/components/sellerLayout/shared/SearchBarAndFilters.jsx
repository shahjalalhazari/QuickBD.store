"use client"
import DashboardSearchBar from '@/components/shared/filters/DashboardSearchBar';
import OutlineDropdown from '@/components/shared/filters/OutlineDropdown';
import { useState } from 'react';

const CategoryFilters = [
  { value: 'all', label: 'All Categories' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'home', label: 'Home & Living' },
];

const StatusFilters = [
  { value: 'all', label: 'All Statuses' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'outofstock', label: 'Out of Stock' },
];

const SearchBarAndFilters = () => {
  const [categoryRange, setCategoryRange] = useState(CategoryFilters[0]);
  const [statusRange, setStatusRange] = useState(StatusFilters[0]);

  return (
    <div className="searchbar-filters">
      <DashboardSearchBar 
        placeholder="search products..." 
      />
      <div className="dropdown-filters">
        {/* CATEGORY DROPDOWN FILTER */}
        <OutlineDropdown
          options={CategoryFilters}
          value={categoryRange}
          onChange={setCategoryRange}
        />
        {/* STATUS DROPDOWN FILTER */}
        <OutlineDropdown
          options={StatusFilters}
          value={statusRange}
          onChange={setStatusRange}
        />
      </div>
    </div>
  );
};

export default SearchBarAndFilters;