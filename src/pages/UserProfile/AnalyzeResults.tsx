import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Listening results'
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [6.5, 7.0, 4.5, 5.5, 6.0, 5.5, 8.0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
function AnalyzeResults() {
    return (
      <div>
        <h3 className="text-center text-[40px] font-medium my-[40px]">
          Analyze Results
        </h3>
        <div className="flex justify-around text-[30px]">
          <span className="bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl cursor-pointer hover:bg-[#40634d] hover:text-[#fff]">
            Listening
          </span>
          <span className="bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl cursor-pointer hover:bg-[#40634d] hover:text-[#fff]">
            Reading
          </span>
          <span className="bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl cursor-pointer hover:bg-[#40634d] hover:text-[#fff]">
            Speaking
          </span>
          <span className="bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl cursor-pointer hover:bg-[#40634d] hover:text-[#fff]">
            Writing
          </span>
        </div>
        <div className="grid grid-rows-1 grid-cols-12 px-[70px] pt-[50px] gap-[20px]">
          <div className="col-span-8">
            <div className="mb-[30px]">
              <Line options={options} data={data} />
            </div>
            <div className="flex justify-around">
              <span className="bg-[#fff] min-w-[180px] text-center px-[10px] py-[20px] rounded-xl shadow-md hover:bg-[#40634d] hover:text-[#fff] cursor-pointer">
                <p className="text-[20px]">Number of exams done</p>
                <p className="font-bold text-[40px]">15</p>
              </span>
              <span className="bg-[#fff] min-w-[180px] text-center px-[10px] py-[20px] rounded-xl shadow-md hover:bg-[#40634d] hover:text-[#fff] cursor-pointer">
                <p className="text-[20px]">Accuracy</p>
                <p className="font-bold text-[40px]">64.50%</p>
              </span>
              <span className="bg-[#fff] min-w-[180px] text-center px-[10px] py-[20px] rounded-xl shadow-md hover:bg-[#40634d] hover:text-[#fff] cursor-pointer">
                <p className="text-[20px]">Average time</p>
                <p className="font-bold text-[40px]">02:20:34</p>
              </span>
              <span className="bg-[#fff] min-w-[180px] text-center px-[10px] py-[20px] rounded-xl shadow-md hover:bg-[#40634d] hover:text-[#fff] cursor-pointer">
                <p className="text-[20px]">Average score</p>
                <p className="font-bold text-[40px]">6.5</p>
              </span>
            </div>
          </div>
          <table className="col-span-4 shadow-lg table-auto border-collapse border border-slate-500">
            <thead>
              <tr>
                <th className="border border-slate-600">Exams</th>
                <th className="border border-slate-600">Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 text-center py-[10px]">
                  C17 IELTS listening test 4
                </td>
                <td className="border border-slate-700 text-center py-[10px]">
                  19/40
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 text-center py-[10px]">
                  C17 IELTS listening test 2
                </td>
                <td className="border border-slate-700 text-center py-[10px]">
                  28/40
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 text-center py-[10px]">
                  C17 IELTS listening test 1
                </td>
                <td className="border border-slate-700 text-center py-[10px]">
                  18/40
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 text-center py-[10px]">
                  C17 IELTS listening test 4
                </td>
                <td className="border border-slate-700 text-center py-[10px]">
                  19/40
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 text-center py-[10px]">
                  C17 IELTS listening test 2
                </td>
                <td className="border border-slate-700 text-center py-[10px]">
                  28/40
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 text-center py-[10px]">
                  C17 IELTS listening test 1
                </td>
                <td className="border border-slate-700 text-center py-[10px]">
                  18/40
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default AnalyzeResults;