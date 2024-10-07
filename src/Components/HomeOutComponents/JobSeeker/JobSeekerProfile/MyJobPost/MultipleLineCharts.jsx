
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MultipleLineCharts = () => {
  // First chart data
  const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
      },
    ],
  };

  // Second chart data
  const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 3',
        data: [35, 29, 50, 41, 66, 75, 50],
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
      },
      {
        label: 'Dataset 4',
        data: [18, 38, 60, 49, 86, 47, 60],
        borderColor: 'rgba(54,162,235,1)',
        backgroundColor: 'rgba(54,162,235,0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Applying overview',
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl  mb-4">Application overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Chart */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <Line data={data1} options={options} />
        </div>

        {/* Second Chart */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <Line data={data2} options={options} />
        </div>
      </div>
    </div>
  );
};

export default MultipleLineCharts;
