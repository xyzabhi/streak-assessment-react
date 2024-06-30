import React from "react";
import SideBar from "../components/SideBar";
import { sidebarMenus } from "../utils/constants";
import styles from "./dashboard.module.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { generateLineChartData, generatePieChartData } from "../utils/methods";
import LineChart from "../components/LineChart";
ChartJS.register(ArcElement, Tooltip, Legend);

const pieChartData = generatePieChartData(5, "Vistors");
const dummyLineData1 = generateLineChartData(1000, "Users", 400, 500);
const dummyLineData2 = generateLineChartData(100, "Audience", 400, 500);
const dummyLineData3 = generateLineChartData(100, "Latency", 400, 500);
const dummyLineData7 = generateLineChartData(100, "Page hit per second", 100, 500);
const dummyLineData4 = generateLineChartData(100, "Unique visit", 600, 700);
const dummyLineData5 = generateLineChartData(100, "Avg. Spent", 1, 10);
const dummyLineData6 = generateLineChartData(100, "Total spend Hrs", 72, 190);
console.log(dummyLineData1, "dumy");
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
          <LineChart
            data={{
              labels: dummyLineData1.labels,
              datasets: [
                {
                  label: dummyLineData1.datasets[0].label,
                  data: dummyLineData1.datasets[0].data,
                  borderColor: "rgba(49,140,231)",
                  borderWidth: 2,
                  pointBorderWidth: 1,
                  backgroundColor: "rgba(49,140,231,0.4)",
                  fill: true,
                  legend: false,
                },
              ],
            }}
            legendShow={true}
            width={1200}
            height={450}
          />
        </div>
        <div className={styles.subCharts}>
          <div className={styles.subchartsec1}>
            <div>
              <h3>
                {dummyLineData2.total} {dummyLineData2.Label}
              </h3>
              <LineChart
                data={{
                  labels: dummyLineData2.labels,
                  datasets: [
                    {
                      label: dummyLineData2.datasets[0].label,
                      data: dummyLineData2.datasets[0].data,
                      borderColor: "rgba(49,140,231)",
                      borderWidth: 2,
                      pointBorderWidth: 1,
                      backgroundColor: "rgba(49,140,231,0.4)",
                      fill: true,
                      legend: false,
                    },
                  ],
                }}
                legendShow={false}
                width={300}
                height={150}
              />
            </div>
            <div>
              <h3>
                {dummyLineData3.total} {dummyLineData3.Label}
              </h3>
              <LineChart
                data={{
                  labels: dummyLineData1.labels,
                  datasets: [
                    {
                      label: dummyLineData3.datasets[0].label,
                      data: dummyLineData3.datasets[0].data,
                      borderColor: "rgba(49,140,231)",
                      borderWidth: 2,
                      pointBorderWidth: 1,
                      backgroundColor: "rgba(49,140,231,0.4)",
                      fill: true,
                      legend: false,
                    },
                  ],
                }}
                legendShow={false}
                width={200}
                height={100}
              />
            </div>
            <div>
              <h3>
                {dummyLineData4.total} {dummyLineData4.Label}
              </h3>
              <LineChart
                data={{
                  labels: dummyLineData1.labels,
                  datasets: [
                    {
                      label: dummyLineData4.datasets[0].label,
                      data: dummyLineData4.datasets[0].data,
                      borderColor: "rgba(49,140,231)",
                      borderWidth: 2,
                      pointBorderWidth: 1,
                      backgroundColor: "rgba(49,140,231,0.4)",
                      fill: true,
                      legend: false,
                    },
                  ],
                }}
                legendShow={false}
                width={200}
                height={100}
              />
            </div>
            <div>
              <h3>
                {dummyLineData5.total} {dummyLineData5.Label}
              </h3>
              <LineChart
                data={{
                  labels: dummyLineData5.labels,
                  datasets: [
                    {
                      label: dummyLineData5.datasets[0].label,
                      data: dummyLineData5.datasets[0].data,
                      borderColor: "rgba(49,140,231)",
                      borderWidth: 2,
                      pointBorderWidth: 1,
                      backgroundColor: "rgba(49,140,231,0.4)",
                      fill: true,
                      legend: false,
                    },
                  ],
                }}
                legendShow={false}
                width={200}
                height={100}
              />
            </div>
            <div>
              <h3>
                {dummyLineData6.total} {dummyLineData6.Label}
              </h3>
              <LineChart
                data={{
                  labels: dummyLineData6.labels,
                  datasets: [
                    {
                      label: dummyLineData6.datasets[0].label,
                      data: dummyLineData6.datasets[0].data,
                      borderColor: "rgba(49,140,231)",
                      borderWidth: 2,
                      pointBorderWidth: 1,
                      backgroundColor: "rgba(49,140,231,0.4)",
                      fill: true,
                      legend: false,
                    },
                  ],
                }}
                legendShow={false}
                width={200}
                height={100}
              />
            </div>
            <div>
              <h3>
                {dummyLineData7.total} {dummyLineData7.Label}
              </h3>
              <LineChart
                data={{
                  labels: dummyLineData7.labels,
                  datasets: [
                    {
                      label: dummyLineData7.datasets[0].label,
                      data: dummyLineData7.datasets[0].data,
                      borderColor: "rgba(49,140,231)",
                      borderWidth: 2,
                      pointBorderWidth: 1,
                      backgroundColor: "rgba(49,140,231,0.4)",
                      fill: true,
                      legend: false,
                    },
                  ],
                }}
                legendShow={false}
                width={200}
                height={100}
              />
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
