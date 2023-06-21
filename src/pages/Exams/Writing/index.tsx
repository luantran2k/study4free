import { useState } from 'react';
import { NavigationTest } from '../commonComponent/navigationTest';
import { NoteInfo } from '../commonComponent/noteInfo';

export const Writing = () => {
  const [index, setIndex] = useState<number>(0);
  const handleTask = (task: number) => {
    setIndex(task);
  };
  console.log(index);

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
        topic:
          'The most important aim of science should be to improve people’s lives. To what extent do you agree or disagree with this statement?Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      },
    ],
  };
  return (
    <div className="bg-[#f8f9fa]">
      <div className="flex justify-center items-center gap-[1rem] p-[2rem]">
        <p className="font-bold text-[1.5rem]">
          C{exams.cambridge} IELTS writing test {exams.test}
        </p>
        <button className="bg-[red] py-[.25rem] px-[1rem] rounded-full">
          Quit
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 w-[90%] mx-auto py-[2rem] gap-[1rem] border-b-2 ">
        <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-12 bg-[] bg-[#fff] rounded-xl shadow-2xl py-[2rem]">
          <div className="xl:col-span-7 col-span-12 px-[1rem] bg-[#f8f9fa]">
            <p>
              You should spend about 40 minutes on this task. Write about the
              following topic:
            </p>
            <div className="font-bold my-[1.5rem]">
              {exams.task[index].topic}
            </div>
            <img src={exams?.task[index].imageTopic} alt="" />
          </div>
          <div className="xl:col-span-5 col-span-12 flex flex-col p-[1rem]">
            <NoteInfo />
            <div className="my-[1rem]">
              <textarea
                className="border-2 rounded-lg p-[1rem]"
                placeholder="Write your essay here"
                name=""
                id=""
                cols={36}
                rows={12}
              ></textarea>
              <p>Word count : 0</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 ">
          <NavigationTest handleTask={handleTask} />
        </div>
      </div>
    </div>
  );
};
