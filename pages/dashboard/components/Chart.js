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
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 4,
      borderRadius: 8,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'left',
    },
    title: {
      display: true,
      text: 'Departments',
      fontSize: 16
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    // {
    //   label: 'Dataset 1',
    //   data: labels.map(() => faker.number.float({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(255, 99, 132)',
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
    // },
    {
      label: 'Outpatient',
      data: labels.map(() => faker.number.float({ min: -1000, max: 1000 })),
      borderColor: '#0d9488',
      backgroundColor: '#0d9488',
    },
    {
      label: 'Pharmacy',
      data: labels.map(() => faker.number.float({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgb(53, 162, 235)',
    },
    {
      label: 'Medical',
      data: labels.map(() => faker.number.float({ min: -1000, max: 1000 })),
      borderColor: '#ea580c',
      backgroundColor: '#ea580c',
    },
  ],
};

export default function Chart() {
  return (
    <div className=''>
      <Bar options={options} data={data} />
    </div>
  )
}
