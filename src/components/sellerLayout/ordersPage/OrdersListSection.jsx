import PaymentBadge from '@/components/shared/badges/PaymentBadge';
import StatusBadge from '@/components/shared/badges/StatusBadge';
import OrderProcessBtn from '@/components/shared/buttons/OrderProcessBtn';
import ViewAllBtn from '@/components/shared/buttons/ViewAllBtn';
import DataTable from '@/components/shared/tables/DataTable';
import { formatDateTime } from '@/utils/formatDateTime';
import { orderData } from '@/utils/tempoData/orderData';
import SectionHeader from '../shared/headers/SectionHeader';
import SearchBarAndFilters from '../shared/filters/SearchBarAndFilters';
import FilterBtns from './FilterBtns';
import OrderCard from '../shared/cards/OrderCard';
import { getOrderNextStep } from '@/lib/getOrderNextStep';

const OrdersListSection = () => {
  const orders = orderData;

  return (
    <section className='section-container'>
      {/* SECTION HEADER */}
      <SectionHeader
        heading="All Orders"
        showBtn={false}
      />

      {/* FILTER BUTTONS */}
      <FilterBtns orders={orders} />

      {/* SEARCHBAR & FILTERS */}
      <SearchBarAndFilters
        searchPlaceholder={"Search orders by Id or Customer..."}
        dropdownOne={daysFilters}
        dropdownTwo={sortFilters}
      />

      {/* ORDERS FOR LARGE SCREENS IN TABLE LAYOUT */}
      <div className="hidden lg:block">
        <DataTable columns={tableColumns} data={orders} />
      </div>

      {/* ORDERS FOR MEDIUM & SMALL SCREENS IN CARD LAYOUT */}
      <div className="order-card-layout lg:hidden">
        {orders.length > 0 ? (
          orders.slice(0, 10).map((order) => (
            <OrderCard key={order.id} order={order} />
          ))
        ) : (
          <p 
            colSpan={columns.length}
            className="py-10 text-center text-body-color"
          >
            {emptyMessage}
          </p>
        )}
      </div>
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
  // ORDER DETAILS ACTION
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
    render:(_, row)=> {
      const nextStepAction = getOrderNextStep(row.status)
      return (
        nextStepAction.length > 0 && (
          <div className="order-next-step">
            {nextStepAction.map((action) => (
              <OrderProcessBtn
                key={action}
                nextStep={action}
              />
            ))}
          </div>
        )
      )
    }
  },
];


// DROPDOWN FILTER OPTIONS
const daysFilters = [
  { value: 'all', label: 'All Time' },
  { value: '7days', label: 'Last 7 Days' },
  { value: '30days', label: 'Last 30 Days' },
  { value: '3months', label: 'Last 3 Months' },
  { value: '6months', label: 'Last 6 Months' },
  { value: 'lastYear', label: 'Last Year' },
];

const sortFilters = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'highest', label: 'Highest Amount' },
  { value: 'lowest', label: 'Lowest Amount' },
];