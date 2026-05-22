"use client"
import { getOrderFilters } from '@/lib/getOrderFilters';
import { useState } from 'react';

const FilterBtns = ({orders}) => {
  const filters = getOrderFilters(orders);
  const [activeFilter, setActiveFilter] = useState("all");
  console.log(activeFilter);

  return (
    <div className="filter-btns">
      {filters.map((filter) => (
        <button
          key={filter.value}
          disabled={activeFilter === filter.value}
          onClick={() => setActiveFilter(filter.value)}
          className={`filter-btn quickbd-transition
            ${
              activeFilter === filter.value
                ? "active-filter-btn" : "inactive-filter-btn"
            }`}
        >
          <span>{filter.label}</span>

          <span
            className={`order-count
              ${
                activeFilter === filter.value
                  ? "active-order-count" : "inactive-order-count"
              }`}
          >
            {filter.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FilterBtns;