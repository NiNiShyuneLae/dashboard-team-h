import React from "react";
import ReactApexChart from "react-apexcharts";

const ProfileChart = () => {
  const seriesData = [
    {
      data: [15000, 12000, 10000, 8000, 7000, 4000, 3000],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    fill: {
      colors: [
        function ({ value, seriesIndex, w }) {
          if (value == 15000) {
            return "#5BA6FF";
          } else if (value == 12000) {
            return "#F35D82";
          } else if (value == 10000) {
            return "#6AD49B";
          } else if (value == 8000) {
            return "#FFCF26";
          } else if (value == 7000) {
            return "#8757ED";
          } else if (value == 4000) {
            return "#6AD4D4";
          } else {
            return "#5C5E6D";
          }
        },
      ],
      pattern: {
        height: 0.5,
      }
    },
    grid: {
      yaxis: {
        lines: {
          show: false
        }
      },
      xaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        top: 1,
        right: 1,
        bottom: 1, 
        left: 1
      }
    },

    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        barHeight: '25%',
        borderRadiusApplication: 'end'
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      axisBorder: { show: false },
      categories: [
        "Phones",
        "Laptops",
        "Headsets",
        "Games",
        "Keyboards",
        "Monitors",
        "Speakers",
      ],
      labels: {
        style: {
          fontSize: '15px',
          colors: '#B5B5C3',
          fontWeight: 600
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '13px',
          fontWeight: 600

        }
      }
    }
  };
return (
    <div id="chart">
        <p className="text-lg font-semibold">Top Selling Categories</p>
        <p className="text-[#B5B5C3] font-medium">8k social visitors</p>
      <ReactApexChart
        options={options}
        series={seriesData}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ProfileChart;