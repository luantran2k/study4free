import { ChangeEvent } from 'react';

interface Props {
  handleTask: (task: number) => void;
}
export const NavigationTest = ({ handleTask }: Props) => {
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
  const handleSunmit = () => {
    console.log('confirm');
  };
  return (
    <div className="rounded-xl shadow-2xl p-[2rem] flex flex-col ">
      <div className="flex flex-row md:flex-col items-center my-[.75rem]">
        <div className="">Time left :</div>
        <span className="font-bold text-[1.5rem]">10.30</span>
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
      {exams.task.map((item, index) => {
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
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};
