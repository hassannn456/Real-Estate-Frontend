import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  borderRadius:'20px',
  plugins: {
    legend: {
      position: 'hidden'
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      suggestedMin: 0,
        suggestedMax: 1000
    },
  },
};


export function VerticalChart({ xLabels, values, values2 }) {
    const data = {
        labels: xLabels,
        datasets: [
          {
            barThickness: 8,
            label: 'Dataset 1',
            strokeColor: "#79D1CF",
            data: values,
            backgroundColor: '#3974B6',
            stack: 'Stack 0',
          },
          { 
            barThickness: 8,
            borderRadius: 10,
            label: 'Dataset 2',
            data: values2,
            backgroundColor: '#D3D3D3',
            stack: 'Stack 0',
          },
        ],
      };
  return <Bar options={options} data={data} />;
}
