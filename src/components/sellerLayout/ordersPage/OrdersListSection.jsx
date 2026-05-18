import PaymentBadge from '@/components/shared/badges/PaymentBadge';
import StatusBadge from '@/components/shared/badges/StatusBadge';
import OrderProcessBtn from '@/components/shared/buttons/OrderProcessBtn';
import ViewAllBtn from '@/components/shared/buttons/ViewAllBtn';
import DataTable from '@/components/shared/tables/DataTable';
import { formatDateTime } from '@/utils/formatDateTime';
import { orderData } from '@/utils/tempoData/orderData';
import SectionHeader from '../shared/headers/SectionHeader';

const OrdersListSection = () => {
  const orders = orderData;

  return (
    <section className='section-container'>
      {/* SECTION HEADER */}
      <SectionHeader
        heading="All Orders"
        showBtn={false}
      />

      {/* ORDERS FOR LARGE SCREENS IN TABLE LAYOUT */}
      <div className="hidden lg:block">
        <DataTable columns={tableColumns} data={orders} />
      </div>

      {/* ORDERS FOR MEDIUM & SMALL SCREENS IN CARD LAYOUT */}
    </section>
  );
};

export default OrdersListSection;


const tableColumns = [
  // ORDER ID
  {
    header: "Order ID",
    accessor: "id"
  },
  // CUSTOMER NAME
  {
    header: "Customer",
    accessor: "customer",
    render:(customer)=><p>{customer.name}</p>
  },
  // ORDER ITEMS
  {
    header: "Ordered Item(s)",
    accessor: "product",
    render:(product)=>{
      const visibleItems = product.slice(0,2);
      const remaining = product.length - 2;

      return (
        <div className="order-items-grid">
          {visibleItems.map(item=>(
            <p 
              key={item.sku} 
              className='order-item'
            >
              {item.name} × {item.quantity}
            </p>
          ))}

          {/* IF REMAINING ITEM */}
          {remaining > 0 && (
            <div className="remaining-items">
              <p>
                +{remaining} more Item(s)
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
  // ORDER DATED & TIME
  {
    header: "Date / Time",
    accessor: "orderDate",
    render:(_,row)=>(
      <p className="whitespace-pre-line">
        {formatDateTime(
          row.orderDate
        )}
      </p>
    )
  },
  // ORDER AMOUNT
  {
    header: "Amount",
    accessor: "total",
    render: (value) => (
      <span className='font-semibold'>৳ {(value).toFixed(2)}</span>
    )
  },
  // PAYMENT METHOD & STATUS
  {
    header:"Payment",
    accessor:"paymentMethod",
    render:(_, row)=>(
      <PaymentBadge method={row.paymentMethod} status={row.paymentStatus} />
    )
  },
  // ORDER STATUS
  {
    header:"Status",
    accessor:"status",
    render:(value)=>(
      <StatusBadge status={value} text={value}/>
    )
  },
  // ORDER DETILS ACTION
  {
    header: "Action",
    accessor: "action",
    render:(_)=>(
      <ViewAllBtn text={"See More"} className={"view-btn"} />
    )
  },
  // ORDER NEXT STEP
  {
    header: "Next Step",
    accessor: "nextStep",
    render:(_, row)=> (
      (row.nextStep) && 
      <div className="flex flex-col gap-y-1">
        <OrderProcessBtn nextStep={row.nextStep} />
        {(row.nextStep == "Accept") && 
          <OrderProcessBtn nextStep={"cancel"} />
        }
      </div>
    )
  },
]