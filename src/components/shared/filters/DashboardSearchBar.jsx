import { FaSearch } from 'react-icons/fa';

const DashboardSearchBar = ({placeholder}) => {
  return (
    <form className='dashboard-searchbar'>
      <FaSearch />
      <input
        type="text"
        placeholder={placeholder}
        className='dashboard-search-input'
      />
    </form>
  );
};

export default DashboardSearchBar;