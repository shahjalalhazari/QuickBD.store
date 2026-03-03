import Image from 'next/image';
import { BiX } from 'react-icons/bi';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const CartTable = ({subtotal}) => {
	return (
		<div className='cart-table'>
			<div className="table-header">
				<p className='w-[25%]'>Product</p>
				<p>Quantity</p>
				<p>Unit Price</p>
				<p>Amount</p>
			</div>
			<div className="table-items">
				{[1,2,3,4].map((_, index) => (
					<div className="cart-row-item" key={index}>
						<Image 
							src={"/images/products/item-1.jpg"} 
							width={80} 
							height={110} 
							alt='Polo T-Shirt' 
							className='cart-item-img' 
						/>

						<div className="details">
							<div className="row-1">
								<h6 className='item-title'>Polo T-Shirt</h6>
								<button className='remove-btn quickbd-transition'>
									<BiX />
								</button>
							</div>

							<div className="row-2">
								<p>Size: <span>M</span></p>
								<p className='block md:hidden'>Color: <span>Red</span></p>
							</div>
							
							<div className="row-3">
								<p className='hidden md:block'>Color: <span>Red</span></p>
								<div className="qty-selector">
									<button className="qty-change quickbd-transition"><FaMinus /></button>
									<span>3</span> 
									<button  className="qty-change quickbd-transition"><FaPlus /></button>
								</div>
								<p>৳ 100.00</p>
								<p><strong>৳ 300.00</strong></p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="cart-subtotal">
				<h5>Subtotal: ৳ {subtotal.toFixed(2)}</h5>
			</div>
		</div>
	);
};

export default CartTable;