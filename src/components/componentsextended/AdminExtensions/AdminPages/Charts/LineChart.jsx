import React from "react";
// Chart Component
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// ----------------------------------------------------------------------
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};
// const labels = ["January", "February", "March", "April", "May", "June", "July"];
export default function LineChart({ xLabels, values, values2 }) {
  const data = {
    labels: xLabels,
    datasets: [
      {
        label: "Dataset 1",
        data: values,
        borderColor: "#3974B6",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.3,
      },
      {
        label: "Dataset 2",
        data: values2,
        borderColor: "#0FFF50",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.3,
      },
    ],
  };
  return <Line options={options} data={data} />;
}