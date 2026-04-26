"use client"
import { Chart } from 'primereact/chart';
import { useEffect, useState } from 'react';

const LineChart = ({ selectedData }) => {
  const [chartData,setChartData]=useState({});
  const [chartOptions,setChartOptions]=useState({});
  
  useEffect(() => {
    const salesColor="#EE7411";
    const orderColor="#38CB89";
    const gridColor="#B8B8B8";
    const tickColor="#6C7275";

    setChartData({
      labels:selectedData.labels,
      datasets:[
        {
          label:"Sales Revenue",
          data:selectedData.sales,
          borderColor:salesColor,
          backgroundColor:salesColor,
          borderWidth:3,
          tension:0.42,
          pointRadius:0,
          pointHoverRadius:6,
          fill:false
        },
        {
          label:"Orders",
          data:selectedData.orders,
          borderColor:orderColor,
          backgroundColor:orderColor,
          borderWidth:3,
          tension:0.42,
          pointRadius:0,
          pointHoverRadius:6,
          fill:false
        }
      ]
    });

    setChartOptions({
      maintainAspectRatio:false,
      aspectRatio: 1,
      interaction:{
        mode:"index",
        intersect:false
      },

      plugins:{
        legend:{
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
        tooltip:{
          backgroundColor:"#0A0B0D",
          padding:12,
          cornerRadius:6
        }
      },

      scales:{
        x:{
          border:{display:false},
          ticks:{
            color:tickColor,
            font:{size:12}
          },
          grid:{
            display:true,
            drawBorder:false
          }
        },
        y:{
          beginAtZero:true,
          border:{display:false},
          ticks:{
            color:tickColor,
            font:{size:12}
          },
          grid:{
            color:gridColor,
            drawBorder:false
          }
        }
      }
    });
  }, [selectedData]);


  return (
    <div className="h-full w-full">
      <Chart
        type="line"
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default LineChart;