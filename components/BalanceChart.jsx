"use client";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const BalanceChart = () => {
  const [timePeriod, setTimePeriod] = useState("Week");
  if (typeof window == "undefined") return null;

  const weekData = {
    series: [
      {
        name: "Income",
        data: [700, 1200, 900, 1100, 1500, 1300, 1700],
      },
      {
        name: "Spend",
        data: [400, 800, 600, 700, 900, 750, 950],
      },
    ],
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  };

  const monthData = {
    series: [
      {
        name: "Income",
        data: [
          3000, 2500, 3600, 3000, 4500, 3500, 6400, 5200, 5900, 3600, 3900,
          5100, 3000, 2500, 3600, 3000, 4500, 3500, 6400, 5200, 5900, 3600,
          3900, 5100, 3000, 2500, 3600, 3000, 4500, 3500, 6400,
        ],
      },
      {
        name: "Spend",
        data: [
          2300, 1100, 2200, 2700, 1300, 2200, 3700, 2100, 4400, 2200, 3000,
          4500, 2300, 1100, 2200, 2700, 1300, 2200, 3700, 2100, 4400, 2200,
          3000, 4500, 2300, 1100, 2200, 2700, 1300, 2200, 3700,
        ],
      },
    ],

    categories: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
  };

  const yearData = {
    series: [
      {
        name: "Income",
        data: [
          32000, 35000, 36000, 30000, 45000, 35000, 64000, 52000, 59000, 36000,
          39000, 51000,
        ],
      },
      {
        name: "Spend",
        data: [
          23000, 21000, 22000, 27000, 23000, 22000, 37000, 31000, 44000, 32000,
          30000, 45000,
        ],
      },
    ],
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };

  const [series, setSeries] = useState(weekData.series);
  const [options, setOptions] = useState({
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "center",
    },
    colors: ["#FED4AE", "#D2B7FF"],
    chart: {
      fontFamily: "Urbanist, sans-serif",
      height: 335,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [1, 1],
      curve: "smooth",
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "category",
      categories: monthData.categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
      min: 0,
      max: 10000,
    },
  });

  useEffect(() => {
    handleTimeChange();
  }, [timePeriod]);

  const handleTimeChange = () => {
    let newCategories, newSeries, newLimit;
    switch (timePeriod) {
      case "Year":
        newCategories = yearData.categories;
        newSeries = yearData.series;
        newLimit = 80000;
        break;
      case "Week":
        newCategories = weekData.categories;
        newSeries = weekData.series;
        newLimit = 2500;
        break;
      default:
        newCategories = monthData.categories;
        newSeries = monthData.series;
        newLimit = 8000;
    }

    setOptions((prevOptions) => ({
      ...prevOptions,
      xaxis: { type: "category", categories: newCategories },
      yaxis: {
        title: {
          style: {
            fontSize: "0px",
          },
        },
        min: 0,
        max: newLimit,
      },
    }));
    setSeries(newSeries);
  };

  const handleChange = (e) => {
    setTimePeriod(e.target.value);
  };

  return (
    <div>
      <div className="p-4 rounded-2xl border bg-white">
        <div className="flex justify-between mx-4">
          <span className="text-3xl font-medium">Wallet History</span>
          <div className="">
            <select
              className="bg-[#FBFAF5]/80 px-4 py-1 text-md rounded-full border font-medium text-black"
              value={timePeriod}
              onChange={handleChange}
            >
              <option value="Week">Week</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
          </div>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={450}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default BalanceChart;
