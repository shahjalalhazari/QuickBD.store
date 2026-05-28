"use client"
import Link from 'next/link';
import MetricPillCard from '../shared/cards/MetricPillCard';
import LineChart from '@/components/shared/charts/LineChart';
import ViewAllBtn from '@/components/shared/buttons/ViewAllBtn';


// DEMO DATA
const analyticsData = {
  label: "Last 7 Days",
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  sales: [620, 740, 680, 390, 940, 1080, 1190],
  orders: [18, 22, 20, 28, 31, 34, 39],
};

const SalesOverviewChart = () => {
  const currentSales = analyticsData.sales[analyticsData.sales.length - 1];
  const currentOrders = analyticsData.orders[analyticsData.orders.length - 1];

  const metricPillData = [
    {
      id: 1,
      label: "Revenue",
      value: `৳ ${currentSales.toFixed(2)}`,
      trend: "12.4%",
      trendGoing: "up"
    },
    {
      id: 2,
      label: "Order Completed",
      value: currentOrders.toFixed(2),
      trend: "2%",
      trendGoing: "down"
    },
    {
      id: 3,
      label: "Avg Order Value",
      value: `৳ ${(currentSales / currentOrders).toFixed(2)}`,
      trend: "0.0%",
      trendGoing: "stable"
    },
  ]

  return (
    <section className="section-container">
      {/* HEADER AND DROPDOWN */}
      <div className="chart-header">
        <div className='space-y-1 md:space-y-2'>
          <p className="chart-sub-heading">This Week</p>
          <h2 className="chart-heading">Sales Overview</h2>
        </div>

        {/* FILTER DROPDOWN */}
        <Link href={"/seller/analytics"}>
          <ViewAllBtn
            text={"See More"}
            className={"view-all-btn"}
          />
        </Link>
      </div>

      {/* METRIC PILLS */}
      <div className="metric-pill-layout">
        {metricPillData.map((item) => (
          <MetricPillCard key={item.id} data={item}/>
        ))}
      </div>

      {/* CHART */}
      <LineChart selectedData={analyticsData} />
    </section>
  );
};

export default SalesOverviewChart;