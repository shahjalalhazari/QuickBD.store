"use client";

import OutlineDropdown from "@/components/shared/filters/OutlineDropdown";
import { useMemo, useState } from "react";
import EarningBarChart from "./EarningBarChart";


export const earningsData = {
  daily: {
    label: "Last 7 Days",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    earnings: [3650, 3120, 3780, 3540, 4720, 4180, 3550],
  },

  weekly: {
    label: "Last 12 Weeks",
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"],
    earnings: [22800, 24500, 23900, 26700, 25800, 28400, 30100, 31800, 33200, 34900, 36500, 39100],
  },

  monthly: {
    label: "Last 12 Months",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    earnings: [92000, 101000, 108500, 112000, 124500, 131000, 145000, 153000, 148000, 167000, 182000, 198000],
  },

  quarterly: {
    label: "Last 4 Quarters",
    labels: ["Q1", "Q2", "Q3", "Q4"],
    earnings: [301500, 367500, 446000, 547000],
  },

  yearly: {
    label: "Last 5 Years",
    labels: ["2021", "2022", "2023", "2024", "2025"],
    earnings: [1250000, 1860000, 2570000, 3680000, 4920000],
  },
};

export const filters = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "yearly", label: "Yearly" },
];

const EarningChartSection = () => {
  const [range, setRange] = useState(filters[0]);
  
  const selectedData = useMemo(
    () => earningsData[range.value],
    [range]
  );


  return (
    <section className="section-container">
      {/* HEADER AND DROPDOWN */}
      <div className="section-header">
        <h5>Earnings Overview</h5>

        {/* FILTER DROPDOWN */}
        <OutlineDropdown
          options={filters}
          value={range}
          onChange={setRange}
        />
      </div>

      {/* CHART */}
      <EarningBarChart data={selectedData} />
    </section>
  );
};

export default EarningChartSection;