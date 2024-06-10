import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const TransactionSummary = () => {
  const [series, setSeries] = useState([100000, 75000]);
  const options = {
    chart: {
      fontFamily: "Urbanist, sans-serif",
      type: "donut",
    },
    colors: ["#FFDAB7", "#D2B7FF"],
    labels: ["Cashless", "Cash"],
    legend: {
      show: true,
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div className="border h-max w-1/3 bg-white rounded-2xl p-4">
      <div className="text-2xl font-medium text-center pb-2">
        Transactions Summary
      </div>
      <div>
        <ReactApexChart options={options} series={series} type="donut" />
      </div>
    </div>
  );
};

export default TransactionSummary;
