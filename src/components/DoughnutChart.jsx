import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import Utils from "./Utils";

const DoughnutChart = () => {
  const doughnutData = {
    labels: ["Active", "Completed", "Yet to Start"],
    datasets: [
      {
        data: [30, 45, 25],
        backgroundColor: Object.values(Utils.CHART_COLORS),
      },
    ],
  };

  const DoughnutOption = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            size: 16,
            weight: 500,
          },
          color: "#B8B5C3",
        },
      },
    },
  };

  return (
    <div>
      <Doughnut data={doughnutData} options={DoughnutOption} />
    </div>
  );
};

export default DoughnutChart;
