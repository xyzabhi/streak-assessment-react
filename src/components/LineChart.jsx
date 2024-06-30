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
    legend: {},
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  425, 16, 32, 329, 487, 352, 284, 281, 139, 348, 360, 139, 88, 120, 165, 258,
  208, 253, 62, 57, 380, 437, 498, 190, 120, 345, 291, 161, 341, 327, 334, 189,
  495, 472, 291, 468, 104, 455, 214, 365, 87, 433, 358, 301, 429, 30, 142, 2,
  300, 130, 51, 253, 87, 410, 65, 65, 134, 232, 186, 328, 135, 281, 211, 212,
  275, 443, 474, 392, 389, 36, 19, 471, 465, 41, 76, 319, 448, 401, 143, 75,
  159, 238, 276, 285, 410, 52, 300, 39, 77, 388, 244, 372, 357, 488, 40, 84,
  363, 315, 305, 187,
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [
        413, 444, 406, 426, 421, 443, 407, 418, 447, 422, 436, 426, 423, 442,
        414, 448, 445, 403, 445, 440, 412, 423, 431, 434, 417, 448, 418, 426,
        431, 415, 439, 417, 402, 442, 442, 423, 424, 408, 440, 422, 431, 406,
        437, 423, 448, 448, 410, 430, 414, 407, 429, 406, 445, 416, 444, 442,
        437, 413, 404, 437, 430, 425, 425, 401, 438, 445, 404, 413, 414, 434,
        411, 417, 408, 437, 422, 434, 414, 412, 403, 419, 414, 445, 439, 409,
        401, 412, 419, 431, 405, 403, 419, 444, 430, 423, 437, 404, 430, 429,
        430, 401,
      ],
      borderColor: "rgba(49,140,231)",
      backgroundColor: "rgba(49,140,231,0.5)",
      fill: true,
      legend:false
    },
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
