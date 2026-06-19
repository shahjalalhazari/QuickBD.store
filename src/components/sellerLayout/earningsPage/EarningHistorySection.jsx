import { earningsHistoryData } from "@/utils/tempoData/earningHistoryData";
import SearchBarAndFilters from "../shared/filters/SearchBarAndFilters";
import SectionHeader from "../shared/headers/SectionHeader";
import DataTable from "@/components/shared/tables/DataTable";
import { formatDateTime } from "@/utils/formatDateTime";
import StatusBadge from "@/components/shared/badges/StatusBadge";
import PaymentBadge from "@/components/shared/badges/PaymentBadge";
import ViewAllBtn from "@/components/shared/buttons/ViewAllBtn";
import DashboardPagination from "../shared/filters/DashboardPagination";
import UnderlineBtn from '@/components/shared/buttons/UnderlineBtn';
import { FaArrowRight } from 'react-icons/fa6';
import EarningCard from "../shared/cards/EarningCard";


const EarningHistorySection = () => {
  const earningHistory = earningsHistoryData;
  const emptyMessage = "No Data Found";


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


      {/* EARNING HISTORY TABLE FOR LARGE SCREEN */}
      <div className="hidden lg:block">
        <DataTable columns={tableColumns} data={earningHistory} />
      </div>


      {/* EARNING HISTORY FOR MEDIUM & SMALL SCREENS IN CARD LAYOUT */}
      <div className="earnings-card-layout lg:hidden">
        {earningHistory.length > 0 ? (
          earningHistory.slice(0, 10).map((earning) => (
            <EarningCard key={earning.id} earning={earning} />
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


      {/* PAGINATION FOR LARGE & MEDIUM SCREEN */}
      <div className="hidden md:block">
        <DashboardPagination />
      </div>


      {/* LOAD MORE BTN FOR SMALL SCREEN */}
      <div className="flex justify-end md:hidden">
        <UnderlineBtn text={"Load More"} icon={<FaArrowRight />} />
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