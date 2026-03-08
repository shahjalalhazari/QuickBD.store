import "./orders.css";
import { SITE_DESCRIPTION, TEMPLATE_NAMES } from "@/app/metadata";
import OrderListTable from "@/components/account/ordersPage/OrderListTable";

export const metadata = {
  title: TEMPLATE_NAMES.orders,
  description: SITE_DESCRIPTION,
};

const myOrders = [
  {
    id: "2302121",
    amount: 1200,
    date: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
    items: 6,
    status: "Pending",
    deliveredDate: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
  },
  {
    id: "2302122",
    amount: 1000,
    date: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
    items: 3,
    status: "Accepted",
    deliveredDate: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
  },
  {
    id: "2302123",
    amount: 1800,
    date: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
    items: 10,
    status: "Processing",
    deliveredDate: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
  },
  {
    id: "2302124",
    amount: 1200,
    date: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
    items: 6,
    status: "Shipped",
    deliveredDate: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
  },
  {
    id: "2302125",
    amount: 1000,
    date: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
    items: 3,
    status: "Delivered",
    deliveredDate: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
  },
  {
    id: "2302126",
    amount: 1000,
    date: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
    items: 3,
    status: "Delivered",
    deliveredDate: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
  },
  {
    id: "2302127",
    amount: 1800,
    date: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
    items: 10,
    status: "Canceled",
    deliveredDate: {
      day: "03 Mar, 2026",
      time: "12:28 PM"
    },
  },
]

const OrdersPage = () => {
  return (
    <div className='box-container'>
			<h3 className="box-heading">Orders History</h3>
      {/* ORDERS LIST TABLE ONLY FOR LARGE DEVICES */}
      <OrderListTable orders={myOrders}/>
		</div>
  );
};

export default OrdersPage;