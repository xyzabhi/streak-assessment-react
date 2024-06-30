import React from "react";
import SideBar from "../components/SideBar";
import { sidebarMenus } from "../utils/constants";
import styles from "./dashboard.module.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { generatePieChartData } from "../utils/methods";
import LineChart from "../components/LineChart";
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
      {/* Charts to be added to with appropriiate dim */}
      <div className={styles.mainContent}>
        <div className={styles.mainChart}>
          <LineChart legendShow={true} width={1600} height={450} />
        </div>
        <div className={styles.subCharts}>
          <div className={styles.subchartsec1}>
            <div>
              {" "}
              <LineChart legendShow={false} width={300} height={150} />
            </div>
            <div>
              {" "}
              <LineChart legendShow={false} width={300} height={150} />
            </div>
            <div>
              {" "}
              <LineChart legendShow={false} width={300} height={150} />
            </div>
            <div>
              {" "}
              <LineChart legendShow={false} width={300} height={150} />
            </div>
            <div>
              {" "}
              <LineChart legendShow={false} width={300} height={150} />
            </div>
            <div>
              {" "}
              <LineChart legendShow={false} width={300} height={150} />
            </div>
          </div>
          <div className={styles.subchartsec2}>
            <Pie data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
