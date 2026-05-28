"use client"
import { Chart } from 'primereact/chart';
import { useEffect, useMemo, useState } from 'react';

const RevenueChart = ({data}) => {
  const [chartRatio, setChartRatio] = useState(0.8);

  // SET CHART RATON BASED OF SCREEN SIZE.
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Mobile
        setChartRatio(1.3);
      } else if (width < 1024) {
        // Tablet
        setChartRatio(1);
      } else {
        // Desktop
        setChartRatio(0.8);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const chartData = useMemo(() => {
    return {
      labels: data.labels,
      datasets: [
        {
          type: "bar",
          label: "Revenue (৳)",
          data: data.revenue,
          backgroundColor: "#EE7411",
          borderRadius: 6,
          yAxisID: "y",
        },
        {
          type: "line",
          label: "Orders",
          data: data.orders,
          borderColor: "#38CB89",
          backgroundColor: "#38CB89",
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
          yAxisID: "y1",
        },
      ],
    };
  }, [data]);

  const chartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      aspectRatio: chartRatio,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        legend: {
          position:"top",
          align:"center",
          labels:{
            color:"#0A0B0D",
            usePointStyle:true,
            boxWidth:10,
            boxHeight:10,
            padding:24,
            font:{
              size:13,
              weight:500
            }
          }
        },
      },
      scales: {
        y: {
          type: "linear",
          position: "left",
        },
        y1: {
          type: "linear",
          position: "right",
        },
      },
    };
  }, [chartRatio]);

  return (
    <div className="h-full w-full">
      <Chart
        type="bar"
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default RevenueChart;