import React from "react";
import SideBar from "../components/SideBar";
import sidebarMenus from "../utils/constants";
import styles from "./dashboard.module.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { generatePieChartData } from "../utils/methods";
import ChartCard from "../components/chartCard";
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
function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <SideBar menus={sidebarMenus} />
      {/* <div className={styles.mainContent}>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
        <div width={400} height={400}>
          <Pie data={data} />
        </div>
      </div> */}
    </div>
  );
}

export default Dashboard;
