import { earningsHistoryData } from "@/utils/tempoData/earningHistoryData";
import SearchBarAndFilters from "../shared/filters/SearchBarAndFilters";
import SectionHeader from "../shared/headers/SectionHeader";
import DataTable from "@/components/shared/tables/DataTable";
import { formatDateTime } from "@/utils/formatDateTime";
import StatusBadge from "@/components/shared/badges/StatusBadge";
import PaymentBadge from "@/components/shared/badges/PaymentBadge";
import ViewAllBtn from "@/components/shared/buttons/ViewAllBtn";
import DashboardPagination from "../shared/filters/DashboardPagination";


const EarningHistorySection = () => {
  const earningHistory = earningsHistoryData;


  return (
    <section className="section-container">
      {/* HEADER */}
      <SectionHeader
        heading={"Earning History"}
      />

      {/* SEARCHBAR & FILTERS */}
      <SearchBarAndFilters
        searchPlaceholder={"Search earning history by ID, Status"}
        dropdownOne={daysFilters}
      />  

      {/* EARNING HISTORY TABLE */}
      <DataTable columns={tableColumns} data={earningHistory} />

      {/* PAGINATION FOR LARGE & MEDIUM SCREEN */}
      <div className="hidden md:block">
        <DashboardPagination />
      </div>
    </section>
  );
};

export default EarningHistorySection;


const tableColumns = [
  // EARNING ID
  {
    header: "Earning ID",
    accessor: "id"
  },
  // ORDER ID
  {
    header: "Order ID",
    accessor: "orderId",
  },
  // ORDER AMOUNT
  {
    header: "Order Amount",
    accessor: "orderAmount",
    render:(orderAmount) => <p>৳ {orderAmount}</p>
  },
  // COMMISSION AMOUNT
  {
    header: "Commission",
    accessor: "commission",
    render: (commission) => <p>৳ {commission}</p>
  },
  // EARNING AMOUNT
  {
    header: "Net Amount",
    accessor: "earningAmount",
    render: (value) => (
      <p className='font-semibold'>৳ {(value).toFixed(2)}</p>
    )
  },
  // EARNED DATE
  {
    header: "Date",
    accessor: "earnedDate",
    render:(_,row)=>(
      <p className="whitespace-pre-line">
        {formatDateTime(
          row.earnedDate
        )}
      </p>
    )
  },
  // EARNING STATUS
  {
    header:"Status",
    accessor:"paymentStatus",
    render:(value)=>(
      <StatusBadge status={value} text={value}/>
    )
  },
  
  // PAYMENT METHOD & STATUS
  {
    header:"Payment",
    accessor:"paymentMethod",
    render:(paymentMethod, row)=>(
      <PaymentBadge method={paymentMethod} status={row.paymentStatus} />
    )
  },
  // ORDER DETAILS ACTION
  {
    header: "Action",
    accessor: "action",
    render:(_)=>(
      <ViewAllBtn text={"View Details"} className={"view-btn"} />
    )
  },
];


// DROPDOWN FILTER OPTIONS
const daysFilters = [
  { value: 'all', label: 'All Time' },
  { value: 'paid', label: 'Paid' },
  { value: 'pending', label: 'Pending' },
  { value: 'refunded', label: 'Refunded' },
];