import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useGetPartIdsBySectionIdQuery } from '../../../store/queries/exams';

interface Props {
  handleTask: (task: string) => void;
  handleIndex: (index: number) => void;
}
const NavigationTest = ({ handleTask, handleIndex }: Props) => {
  const [time, setTime] = useState<number>(3600);
  const ref = useRef<NodeJS.Timer | null>(null);
  const { data, isSuccess, error, isLoading } = useGetPartIdsBySectionIdQuery({
    section: 'Writing',
    sectionId: '649a4f002cee64a48e0d8f8a',
  });
  console.log(data);

  useEffect(() => {
    if (isSuccess) {
      handleTask(data.parts[0].id);
    }
  }, [isSuccess]);
  const getPartId = (partId: string) => {
    handleTask(partId);
  };

  const getPartIndex = (partIndex: number) => {
    handleIndex(partIndex);
  };
  // useEffect(() => {
  //   ref.current = setInterval(() => {
  //     setTime((prev) => prev - 1);
  //   }, 1000);

  //   return () => clearInterval(ref.current as NodeJS.Timer);
  // }, []);
  useEffect(() => {
    if (time === 0) {
      clearInterval(ref.current as NodeJS.Timer);
    }
  }, [time]);
  const handleSunmit = () => {
    if (time > 0) {
      const realTime = Date.now();
      if (confirm('Do you want to submit answers?')) {
        console.log('submit');
      }
      const realTime2 = Date.now();
      const subtract = Math.floor((realTime2 - realTime) / 1000);
      if (time > subtract) {
        setTime((prev) => prev - subtract);
      } else {
        setTime(0);
      }
    } else {
      console.log('stop');
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
              `${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${
                time % 60
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
        You can click on the question number in the article to mark the review
      </p>
      {data?.parts.map((item, index) => {
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
                onChange={() => {
                  getPartId(item.id);
                  getPartIndex(index);
                }}
                value={index}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default NavigationTest;
