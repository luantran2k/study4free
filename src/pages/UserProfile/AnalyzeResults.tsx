import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useGetUserByIdQuery } from '../../store/queries/users';
import { RootState } from '../../store';
import NotVipPlayer from '../NotFound/NotVipPlayer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
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
      text: 'Listening results',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const dataForLine = {
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

const dataForPie = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function AnalyzeResults() {
  const user = useSelector((state: RootState) => state.auth.userInformation);
  const { data } = useGetUserByIdQuery(user?.id);
  return (
    <div>
      {!data?.payment ? (
        <NotVipPlayer />
      ) : (
        <>
          <h3 className="text-center text-[40px] font-medium my-[20px]">
            Analyze Results
          </h3>
          <div className="flex justify-around text-[30px] flex-wrap gap-5">
            <span
              className="bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl 
          cursor-pointer min-w-[200px] hover:bg-[#40634d] hover:text-[#fff]"
            >
              Listening
            </span>
            <span
              className="bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl 
          cursor-pointer min-w-[200px] hover:bg-[#40634d] hover:text-[#fff]"
            >
              Reading
            </span>
            <span
              className="bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl 
          cursor-pointer min-w-[200px] hover:bg-[#40634d] hover:text-[#fff]"
            >
              Speaking
            </span>
            <span
              className="bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl 
          cursor-pointer min-w-[200px] hover:bg-[#40634d] hover:text-[#fff]"
            >
              Writing
            </span>
          </div>
          <div className="grid grid-rows-1 grid-cols-12 px-[40px] pt-[50px] gap-[20px]">
            <div className="col-span-9 max-lg:col-span-12 max-lg:flex max-lg:flex-col max-lg:items-center">
              <div className="mb-[30px] max-lg:hidden">
                <Line options={options} data={dataForLine} />
              </div>
              <div className="mb-[30px] hidden max-lg:block">
                <Pie data={dataForPie} />
              </div>
              <div className="flex justify-around gap-[10px] mb-6 flex-wrap">
                <span
                  className="bg-[#fff]  text-center px-[10px] py-[20px] rounded-xl 
              shadow-md hover:bg-[#40634d] hover:text-[#fff] cursor-pointer min-w-[180px]"
                >
                  <p className="text-[20px]">Number exams</p>
                  <p className="font-bold text-[30px]">15</p>
                </span>
                <span
                  className="bg-[#fff] text-center px-[10px] py-[20px] rounded-xl 
              shadow-md hover:bg-[#40634d] hover:text-[#fff] cursor-pointer min-w-[180px]"
                >
                  <p className="text-[20px]">Accuracy</p>
                  <p className="font-bold text-[30px]">64.50%</p>
                </span>
                <span
                  className="bg-[#fff] text-center px-[10px] py-[20px] rounded-xl 
              shadow-md hover:bg-[#40634d] hover:text-[#fff] cursor-pointer min-w-[180px]"
                >
                  <p className="text-[20px]">Average time</p>
                  <p className="font-bold text-[30px]">02:20:34</p>
                </span>
                <span
                  className="bg-[#fff] text-center px-[10px] py-[20px] rounded-xl 
              shadow-md hover:bg-[#40634d] hover:text-[#fff] cursor-pointer min-w-[180px]"
                >
                  <p className="text-[20px]">Average score</p>
                  <p className="font-bold text-[30px]">6.5</p>
                </span>
              </div>
            </div>
            <div className="mt-12 col-span-3 max-h-[400px] overflow-scroll max-lg:hidden">
              <table
                className="shadow-lg table-auto border-collapse
            border border-slate-500 w-[100%]"
              >
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
                      C17 IELTS listening test 1
                    </td>
                    <td className="border border-slate-700 text-center py-[10px]">
                      18/40
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
                      C17 IELTS listening test 1
                    </td>
                    <td className="border border-slate-700 text-center py-[10px]">
                      18/40
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
        </>
      )}
    </div>
  );
}

export default AnalyzeResults;
