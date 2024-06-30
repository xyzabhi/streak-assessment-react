import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { generateLineChartData } from "../utils/methods";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // display: false,
      position: "top", // Set legend position to top
      align: "start",
      boxWidth: 5,
    },
    labels: {},
    title: {
      // display: true,
      // text: "Chart.js Line Chart",
    },
  },
};

const dummyData = generateLineChartData(100, "Users", 400, 500);

export const data = {
  labels: dummyData.labels,
  datasets: [
    {
      label: dummyData.datasets[0].label,
      data: dummyData.datasets[0].data,
      borderColor: "rgba(49,140,231)",
      borderWidth: 2,
      pointBorderWidth: 1,
      backgroundColor: "rgba(49,140,231,0.4)",
      fill: true,
      legend: false,
    },
  ],
};

export default function LineChart({ width, height, legendShow }) {
  console.log(options);
  options.plugins.legend.display = legendShow;
  console.log(options);
  return <Line options={options} data={data} width={width} height={height} />;
}
