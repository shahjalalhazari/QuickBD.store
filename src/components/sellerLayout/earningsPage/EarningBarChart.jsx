import { Chart } from 'primereact/chart';
import { useEffect, useState } from 'react';

const EarningBarChart = ({data}) => {
  const [chartData,setChartData]=useState({});
    const [chartOptions,setChartOptions]=useState({});
    
    useEffect(() => {
      const earningsColor="#EE7411";
      const gridColor="#B8B8B8";
      const tickColor="#6C7275";
  
      setChartData({
        labels:data.labels,
        datasets:[
          {
            label:"Earnings",
            data:data.earnings,
            borderColor:earningsColor,
            backgroundColor:earningsColor,
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
          legend: {
            display: false,
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
            grid:{
              color:gridColor,
              drawBorder:false
            },
            ticks: {
              color:tickColor,
              font:{size:12},
              callback: (value) => {
                if (value >= 1000) {
                  return `${value / 1000}k`;
                }
                return value;
              },
            }
          }
        }
      });
    }, [data]);


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

export default EarningBarChart;