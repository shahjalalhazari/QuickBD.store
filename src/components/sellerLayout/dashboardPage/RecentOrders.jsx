import StatusBadge from '@/components/shared/badges/StatusBadge';
import ViewAllBtn from '@/components/shared/buttons/ViewAllBtn';
import DataTable from '@/components/shared/tables/DataTable';
import { formatDateTime } from '@/utils/formatDateTime';
import { orderData } from '@/utils/orderData';
import Link from 'next/link';

const RecentOrders = () => {
  const orders = orderData;

  return (
    <div className='section-container'>
      <div className="section-header">
        <h5>Recent Orders</h5>
        <Link href={"/dashboard/orders"}>
          <ViewAllBtn text={"View All"} className={"view-all-btn"} />
        </Link>
      </div>

      {/* TABLE */}
      <DataTable columns={tableColumns} data={orders} />
    </div>
  );
};

export default RecentOrders;

const tableColumns = [
  {
    header: "Order ID",
    accessor: "id"
  },
  {
    header: "Customer",
    accessor: "customer",
    render:(customer)=><p>{customer.name}</p>
  },
  {
    header: "Ordered Item(s)",
    accessor: "product",
    render:(product,_)=>{
      const visibleItems = product.slice(0,2);
      const remaining = product.length - 2;

      return (
        <div className="order-items-grid">
          {visibleItems.map(item=>(
            <p key={item.sku} className='order-item'>{item.name} × {item.quantity}</p>
          ))}

          {/* IF REMAINING ITEM */}
          {remaining > 0 && (
            <div className="flex gap-2 items-center">
              <p>
                +{remaining} item(s)
              </p>
              <button className="show-all-btn quickbd-transition">
                Show All
              </button>
            </div>
          )}
        </div>
      )
      }
    },
  {
    header: "Date",
    accessor: "orderDate",
    render:(_,row)=>(
      <p className="">
        {formatDateTime(
          row.orderDate
        )}
      </p>
    )
  },
  {
    header: "Amount",
    accessor: "total",
    render: (value) => (
      <span className='font-semibold'>৳ {(value).toFixed(2)}</span>
    )
  },
  {
    header:"Status",
    accessor:"status",
    render:(value)=>(
      <StatusBadge status={value} text={value}/>
    )
  },
  {
    header: "Action",
    accessor: "action",
    render:(_)=>(
      <ViewAllBtn text={"View"} className={"view-btn"} />
    )
  },
]