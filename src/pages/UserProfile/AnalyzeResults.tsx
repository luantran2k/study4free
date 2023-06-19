import { Line } from 'react-chartjs-2';
import { useEffect, useRef } from 'react'

function AnalyzeResults() {
    const chartRef = useRef<any>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = chartRef.current.chartInstance;
      // Perform any necessary chart instance operations here
    }
  }, []);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Example Dataset',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
    return (
      <div>
        <h3 className="text-center text-[40px] font-medium my-[40px]">
          Analize Results
        </h3>
        <div className="flex justify-around text-[30px]">
          <span className="bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl cursor-pointer">
            Listening
          </span>
          <span className="bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl cursor-pointer">
            Reading
          </span>
          <span className="bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl cursor-pointer">
            Speaking
          </span>
          <span className="bg-[#fff] shadow-xl py-[20px] px-[40px] rounded-3xl cursor-pointer">
            Writing
          </span>
        </div>
        <div className="grid grid-rows-1 grid-cols-12 px-[70px] pt-[50px] gap-[20px]">
          <div className="col-span-8">
            {/* <Line data={data} options={options} ref={chartRef} /> */}
            <div className="w-[100%] h-[400px] bg-white"></div>
            <div className="flex justify-around">
              <span className="bg-[#fff] min-w-[180px] text-center px-[10px] py-[20px] rounded-xl shadow-md">
                <p>Number of exams done</p>
                <p>15</p>
              </span>
              <span className="bg-[#fff] min-w-[180px] text-center px-[10px] py-[20px] rounded-xl shadow-md">
                <p>Accuracy</p>
                <p>64.50%</p>
              </span>
              <span className="bg-[#fff] min-w-[180px] text-center px-[10px] py-[20px] rounded-xl shadow-md">
                <p>Average time</p>
                <p>02:20:34</p>
              </span>
              <span className="bg-[#fff] min-w-[180px] text-center px-[10px] py-[20px] rounded-xl shadow-md">
                <p>Average score</p>
                <p>6.5</p>
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