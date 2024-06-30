import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { generatePieChartData } from "./utils/methods";
import Dashboard from "./pages/Dashboard";

ChartJS.register(ArcElement, Tooltip, Legend);
const pieChartData = generatePieChartData(5, "Vistors");
export const data = {
  labels: pieChartData.label,
  datasets: [
    {
      label: pieChartData.tagMessage,
      data: pieChartData.values,
      backgroundColor: pieChartData.colors,
      borderColor: pieChartData.colors,
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Dashboard/>
      <Pie data={data} />
    </div>
  );
}
