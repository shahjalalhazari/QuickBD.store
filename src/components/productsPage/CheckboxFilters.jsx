import { FiFilter } from "react-icons/fi";
import CheckboxFilter from "../shared/filters/CheckboxFilter";


const CheckboxFilters = ({sortingOptions, categoryOptions, priceOptions}) => {
  return (
    <div className="checkbox-filters">
      {/* HEADING */}
        <h2 className="filter-heading"><FiFilter />Filters</h2>

        {/* SORTING LIST */}
        <CheckboxFilter title={"Sort By"} options={sortingOptions} />
        {/* CATEGORIES LIST */}
        <CheckboxFilter title={"Categories"} options={categoryOptions} />
        {/* CATEGORIES LIST */}
        <CheckboxFilter title={"Price Range"} options={priceOptions} />
    </div>
  );
};

export default CheckboxFilters;