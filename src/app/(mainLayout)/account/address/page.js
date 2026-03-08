import AddressCard from "@/components/account/addressPage/AddressCard";
import "./address.css";
import { SITE_DESCRIPTION, TEMPLATE_NAMES } from "@/app/metadata";

export const metadata = {
  title: TEMPLATE_NAMES.addresses,
  description: SITE_DESCRIPTION,
};


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