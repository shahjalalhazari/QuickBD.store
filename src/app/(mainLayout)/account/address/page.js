import AddressCard from "@/components/account/addressPage/AddressCard";
import "./address.css";


const AddressPage = () => {
  return (
    <div className='box-container'>
			<h3 className="box-heading">Account Details</h3>
      <div className="address-grid-layout">
        <AddressCard/>
        <AddressCard/>
      </div>
      
		</div>
  );
};

export default AddressPage;