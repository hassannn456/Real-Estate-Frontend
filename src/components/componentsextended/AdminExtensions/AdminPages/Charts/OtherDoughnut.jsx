import { Doughnut } from 'react-chartjs-2';
import React from "react";
// Chart Component
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// ----------------------------------------------------------------------
ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",

    },
  },
};
export default function OtherDoughnut({ xLabels, values }) {
  const data = {
    labels: xLabels,
    datasets: [
      {
        label: "# of Votes",
        data: values,
        backgroundColor: ["#3974B6", "#222222"],
        borderColor: ["rgb(240,240,240)"],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
}