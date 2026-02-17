import SortingDropdown from "../shared/filters/SortingDropdown";

const SortingDropdowns = ({sortingOptions, categoryOptions, priceOptions}) => {
  
  return (
    <div className="sorting-dropdowns">
      {/* SORTING LIST */}
      <SortingDropdown 
        title={"Sort By"} 
        options={sortingOptions}
      />
      {/* CATEGORIES LIST */}
      <SortingDropdown 
        title={"Categories"} 
        options={categoryOptions} 
      />
      {/* CATEGORIES LIST */}
      <SortingDropdown 
        title={"Price Range"} 
        options={priceOptions} 
      />
    </div>
  );
};

export default SortingDropdowns;