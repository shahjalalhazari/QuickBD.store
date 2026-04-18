"use client"
import { BiEditAlt } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

const AddressCard = () => {
  const handleUpdateAddress = () => {
    console.log("Edit Button Clicked.");
  }

  const handleDeleteAddress = () => {
    console.log("Delete Button Clicked.");
  }

  return (
    <div className='address-card'>
      <div className="card-header">
        <p className="card-heading">Billing Address</p>
        <div className="card-buttons">
          <button 
            className="btn quickbd-transition"
            title="Edit Address"
            onClick={handleUpdateAddress}
            >
            <BiEditAlt /> Edit
          </button>
          <button 
            className="btn quickbd-transition"
            title="Delete Address"
            onClick={handleDeleteAddress}
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </div>

      {/* DETAILS */}
      <div className="address-details">
        <p><span>Shahjalal Hazari</span></p>
        <p>+880 123 123 1234</p>
        <p>Holing No: 365, House No: 1, Pennai (Hazari Bari)</p>
        <p>Opposite of Mukti Medical Center</p>
        <p>Gouripur, Daudkandi, Cumilla - 3517</p>
      </div>
      
    </div>
  );
};

export default AddressCard;