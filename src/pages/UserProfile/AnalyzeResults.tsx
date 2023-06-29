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
import { useEffect, useState } from 'react';

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

function AnalyzeResults() {
  const user = useSelector((state: RootState) => state.auth.userInformation);
  const [section, setSection] = useState<string>('Listening');
  const [numberExam, setNumberExam] = useState<number>(0);
  const { data, isSuccess } = useGetUserByIdQuery(user?.id);

  const dataExam = data?.userDoingExam.filter((exam: IExamResult) => {
    return exam.section === section;
  });

  const dateData = dataExam?.map((value: IExamResult) => {
    const date = new Date(value.createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Note: January is represented by 0, so we add 1 to get the actual month
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  });
  const scoreData = dataExam?.map((value: IExamResult) => {
    console.log(value);

    return value.score;
  });

  const averageScore = scoreData?.reduce(
    (accumulator: number, currentValue: number) => {
      return accumulator + currentValue;
    },
    0
  );

  const finalResult: number = averageScore / scoreData?.length;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${section} results`,
      },
    },
  };

  const labels = dateData;

  const dataForLine = {
    labels,
    datasets: [
      {
        label: '',
        data: scoreData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const dataForPie = {
    labels: dateData,
    datasets: [
      {
        label: '# of Votes',
        data: scoreData,
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
  const array: number[] = [1, 2];
  console.log(array.length);

  useEffect(() => {
    const set = new Set();
    dataExam?.map((value: IExamResult) => {
      set.add(value.title);
    });
    setNumberExam(set.size);
  }, [section]);
  if (isSuccess)
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
                className={`bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl 
              cursor-pointer min-w-[200px] hover:bg-[#38bdf8] hover:text-[#fff] ${
                section == 'Listening' ? 'bg-[#38bdf8] text-white' : ''
              }`}
                onClick={() => setSection('Listening')}
              >
                Listening
              </span>
              <span
                className={`bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl 
              cursor-pointer min-w-[200px] hover:bg-[#38bdf8] hover:text-[#fff] ${
                section == 'Reading' ? 'bg-[#38bdf8] text-white' : ''
              }`}
                onClick={() => setSection('Reading')}
              >
                Reading
              </span>
              <span
                className={`bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl 
              cursor-pointer min-w-[200px] hover:bg-[#38bdf8] hover:text-[#fff] ${
                section == 'Speaking' ? 'bg-[#38bdf8] text-white' : ''
              }`}
                onClick={() => setSection('Speaking')}
              >
                Speaking
              </span>
              <span
                className={`bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl 
              cursor-pointer min-w-[200px] hover:bg-[#38bdf8] hover:text-[#fff] ${
                section == 'Writing' ? 'bg-[#38bdf8] text-white' : ''
              }`}
                onClick={() => setSection('Writing')}
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
              shadow-md min-w-[180px]"
                  >
                    <p className="text-[20px]">Number exams</p>
                    <p className="font-bold text-[30px]">{numberExam}</p>
                  </span>
                  <span
                    className="bg-[#fff] text-center px-[10px] py-[20px] rounded-xl 
              shadow-md min-w-[180px]"
                  >
                    <p className="text-[20px]">Accuracy</p>
                    <p className="font-bold text-[30px]">
                      {numberExam > 0
                        ? ((finalResult / 9) * 100).toFixed(2)
                        : 0}
                      %
                    </p>
                  </span>
                  <span
                    className="bg-[#fff] text-center px-[10px] py-[20px] rounded-xl 
              shadow-md min-w-[180px]"
                  >
                    <p className="text-[20px]">Average score</p>
                    <p className="font-bold text-[30px]">
                      {numberExam > 0 ? finalResult.toFixed(1) : 0}
                    </p>
                  </span>
                </div>
              </div>
              <div className="mt-12 col-span-3 max-h-[400px] overflow-auto max-lg:hidden">
                <table
                  className="shadow-lg table-auto border-collapse
            border border-slate-500 w-[100%]"
                >
                  <thead className="bg-info text-white">
                    <tr>
                      <th className="border border-slate-600">Exams</th>
                      <th className="border border-slate-600">Results</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataExam.map((exam: any, index: number) => {
                      return (
                        <tr key={index}>
                          <td className="border border-slate-700 text-center py-[10px]">
                            {`${section} ${exam.title}`}
                          </td>
                          <td className="border border-slate-700 text-center py-[10px]">
                            {`${exam.numberOfTrueQuestion}/${exam.totalQuestion}`}
                          </td>
                        </tr>
                      );
                    })}
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
