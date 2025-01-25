import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale, LinearScale, BarElement, Tooltip, Legend, Chart as ChartJS } from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [330, 250, 110, 300, 490, 350, 270, 130, 425],
        backgroundColor: '#0275ff',
        borderRadius: ,
        borderSkipped: false,
        barThickness: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
            color: '#E5E7EB',
            font: {
            family: "'Plus Jakarta Sans', sans-serif",
            },
        },
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            const month = tooltipItems[0].label;
            const sales = tooltipItems[0].raw;
            return `${month}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: false, 
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100, 
          max: 500, 
          color: '#E5E7EB',
          font: {
            family: "'Plus Jakarta Sans', sans-serif",
          },
        },
      },
    },
  };

  const gradientBackground = (context) => {
    const canvas = context.chart.canvas;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#060a28');
    gradient.addColorStop(1, '#090d22');
    return gradient;
  };

  return (
    <div className='min-w-[344px] bg-gradient-to-r from-[#060a28] to-[#090d22] p-4 rounded-xl'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
