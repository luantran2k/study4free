import { ChangeEvent, useEffect, useRef, useState } from 'react';

interface Props {
  handleTask: (task: number) => void;
  defaultIndex: number;
}
const NavigationTest = ({ handleTask, defaultIndex }: Props) => {
  const [time, setTime] = useState<number>(3600);
  const ref = useRef<NodeJS.Timer | null>(null);
  const exams = {
    id: 1,
    cambridge: 14,
    test: 1,
    skill: 'writing',
    task: [
      {
        topic:
          'The graph below gives information about the percentage of the population in four Asian countries living in cities from 1970 to 2020, with predictions for 2030 and 2040.Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        imageTopic:
          'https://study4.com/media/uploads/editor/study4/2023/06/09/screen-shot-2023-06-09-at-82718-pm.png',
      },
      {
        topic: '',
      },
    ],
  };

  const getIndex = (e: ChangeEvent<HTMLInputElement>) => {
    handleTask(Number(e.target.value));
  };
  useEffect(() => {
    ref.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(ref.current as NodeJS.Timer);
  }, [time]);
  useEffect(() => {
    if (time === 0) {
      clearInterval(ref.current as NodeJS.Timer);
    }
  }, [time]);
  const handleSunmit = () => {
    if (time > 0) {
      const realTime = Date.now();
      if (confirm('Do you want to submit answers?')) {
        console.log('ss');
      }
      const realTime2 = Date.now();
      const subtract = Math.floor((realTime2 - realTime) / 1000);
      if (time > subtract) {
        setTime((prev) => prev - subtract);
      } else {
        setTime(0);
      }
    } else {
      console.log('ss');
    }
  };
  return (
    <div className="rounded-xl shadow-2xl p-[2rem] flex flex-col ">
      <div className="flex flex-row md:flex-col items-center my-[.75rem]">
        <div className="">Time left :</div>
        <span className="font-bold text-[1.5rem]">
          {' '}
          <div id={`seconds `} className={`${time < 5 ? 'warning' : ''}`}>
            {time === 0 ? (
              <span className="end">End!</span>
            ) : (
              `${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60
              }`
            )}
          </div>
        </span>
      </div>
      <button
        onClick={handleSunmit}
        className="border-2 border-[#35509a] text-[#35509a] py-[0.5rem] px-[1rem] rounded-xl font-medium hover:bg-[#35509a] hover:text-[#fff]"
      >
        Submit
      </button>
      <p className="text-[#ffad3c] font-bold italic my-[0.75rem]">
        Note: you can click on the question number in the article to mark the
        review
      </p>
      {exams.task.map((_, index) => {
        return (
          <div
            key={index}
            className="my-[1rem] flex justify-center items-center"
          >
            <label className=" flex items-center gap-[1rem]">
              <span className="label-text font-bold text-[1.25rem]">
                Task {index + 1}
              </span>
              <input
                className="radio checked:bg-red-500"
                type="radio"
                name="task"
                onChange={getIndex}
                value={index}
                checked={index === defaultIndex}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};


export default NavigationTest