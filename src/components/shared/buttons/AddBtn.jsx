import { FaSquarePlus } from 'react-icons/fa6';

const AddBtn = ({ text }) => {
  return (
    <div className='add-btn quickbd-transition'>
      <FaSquarePlus className='text-lg lg:text-2xl' /> {text}
    </div>
  );
};

export default AddBtn;