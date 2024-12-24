import React from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Chart as ChartJS } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Websites',
        data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
        fill: true,
        backgroundColor: 'rgba(43, 210, 249, 0.2)',
        borderColor: '#2bd2f9',
        tension: 0.2,
      },
      {
        label: 'Mobile Apps',
        data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
        fill: true,
        backgroundColor: 'rgba(2, 114, 251, 0.2)',
        borderColor: '#0272fb',
        tension: 0.2,
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
        enabled: true,
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 100,
          min: 100,
          max: 600,
          color: '#E5E7EB',
          font: {
            family: "'Plus Jakarta Sans', sans-serif",
          },
        },
      },
      x: {
        ticks: {
          color: '#E5E7EB',
          font: {
            family: "'Plus Jakarta Sans', sans-serif",
          },
        },
      },
    },
  };

  return (
    <div className="w-[598px] h-[310px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
