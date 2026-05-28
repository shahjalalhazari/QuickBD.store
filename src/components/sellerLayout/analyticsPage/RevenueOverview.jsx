"use client"
import RevenueChart from '@/components/shared/charts/RevenueChart';
import OutlineDropdown from '@/components/shared/filters/OutlineDropdown';
import { useMemo, useState } from 'react';

export const revenueData = {
  daily: {
    label: "Last 7 Days",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    revenue: [820, 950, 1100, 780, 1450, 1820, 2100],
    orders: [15, 18, 22, 14, 29, 35, 41],
  },

  weekly: {
    label: "Last 12 Weeks",
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"],
    revenue: [5200, 6100, 5800, 7400, 6900, 8100, 8800, 9700, 10200, 11300, 12100, 13600],
    orders: [105, 124, 118, 143, 139, 164, 178, 193, 207, 225, 241, 266],
  },

  monthly: {
    label: "Last 12 Months",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    revenue: [12000, 14500, 16200, 15400, 18100, 19600, 22100, 23800, 21400, 24700, 28900, 31500],
    orders: [310, 365, 410, 395, 458, 497, 552, 604, 571, 639, 725, 801],
  },

  quarterly: {
    label: "Last 4 Quarters",
    labels: ["Q1", "Q2", "Q3", "Q4"],
    revenue: [42700, 53100, 67300, 85100],
    orders: [1085, 1350, 1727, 2165],
  },

  yearly: {
    label: "Last 5 Years",
    labels: ["2021", "2022", "2023", "2024", "2025"],
    revenue: [180000, 265000, 342000, 481000, 625000],
    orders: [5200, 7600, 9800, 13800, 18200],
  },
};

export const filters = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "yearly", label: "Yearly" },
];

const RevenueOverview = () => {
  const [range, setRange] = useState(filters[0]);

  const selectedData = useMemo(
      () => revenueData[range.value],
      [range]
    );
  
  return (
    <section className="section-container">
      {/* HEADER AND DROPDOWN */}
      <div className="section-header">
        <h5>Sales Revenue</h5>

        {/* FILTER DROPDOWN */}
        <OutlineDropdown
          options={filters}
          value={range}
          onChange={setRange}
        />
      </div>

      {/* CHART */}
      <RevenueChart data={selectedData} />
    </section>
  );
};

export default RevenueOverview;