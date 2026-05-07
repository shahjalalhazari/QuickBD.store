"use client"
import OutlineDropdown from '@/components/shared/filters/OutlineDropdown';
import { useMemo, useState } from "react";
import MetricPillCard from '../shared/cards/MetricPillCard';
import LineChart from '@/components/shared/charts/LineChart';


const analyticsData = {
  "7d": {
    label: "Last 7 Days",
    labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    sales:[620,740,680,390,940,1080,1190],
    orders:[18,22,20,28,31,34,39]
  },

  "30d": {
    label: "Last 30 Days",
    labels:["01","03","05","07","09","11","13","15","17","19","21","23","25","27","29"],
    sales:[4200,5100,4800,6400,1234,2345,3456,4567,5678,6789,7890,5624,9876,7840,7564],
    orders:[145,172,161,210,123,234,345,456,567,678,789,890,987,876,765]
  },

  "90d": {
    label: "Last 90 Days",
    labels:["Jan","Feb","Mar"],
    sales:[12400,15100,16800],
    orders:[452,508,571]
  },

  "6m": {
    label: "Last 6 Months",
    labels:["Jan","Feb","Mar","Apr","May","Jun"],
    sales:[4200,5100,4800,6400,7200,8100],
    orders:[145,172,161,210,248,279]
  },

  "thisYear": {
    label: "This Year",
    labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dev"],
    sales:[4200,5100,4800,6400,7200,8100,8900,10000,7920,8800,11002,7050],
    orders:[145,172,161,210,248,279,305,500,320,439,893,123]
  },
};

const filters = [
  {value:"7d",label:"Last 7 Days"},
  {value:"30d",label:"Last 30 Days"},
  {value:"90d",label:"Last 90 Days"},
  {value:"6m",label:"Last 6 Months"},
  {value:"thisYear",label:"This Year"},
];

const SalesOverviewChart = () => {
  const [range, setRange] = useState(filters[0]);

  const selectedData = useMemo(
    () => analyticsData[range.value],
    [range]
  );

  const currentSales=selectedData.sales[selectedData.sales.length-1];
  const currentOrders= selectedData.orders[selectedData.orders.length-1];

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
          <p className="chart-sub-heading">Performance Analytics</p>
          <h2 className="chart-heading">Sales Overview</h2>
        </div>

        {/* FILTER DROPDOWN */}
        <OutlineDropdown
          options={filters}
          value={range}
          onChange={setRange}
        />
      </div>

      {/* METRIC PILLS */}
      <div className="metric-pill-layout">
        {metricPillData.map((item) => (
          <MetricPillCard key={item.id} data={item}/>
        ))}
      </div>

      {/* CHART */}
      <LineChart selectedData={selectedData} />
    </section>
  );
};

export default SalesOverviewChart;