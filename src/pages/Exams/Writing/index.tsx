import { ChangeEvent, lazy, useState } from 'react';
import { useGetPartByIdQuery } from '../../../store/queries/exams';
const NavigationTest = lazy(() => import('../commonComponent/navigationTest'));
const NoteInfo = lazy(() => import('../commonComponent/noteInfo'));

const Writing = () => {
  const [index, setIndex] = useState<number>(0);
  const [partId, setPartId] = useState<string>('');
  const [essay, setEssay] = useState<string[]>([]);
  const [countWord, setCountWord] = useState<number>(0);

  const { data, isSuccess, error, isLoading } = useGetPartByIdQuery({
    section: 'Writing',
    partId: partId,
  });

  const handleTask = (task: string) => {
    setPartId(task);
  };

  const handleIndex = (index: number) => {
    setIndex(index);
  };

  const handleWritingEssay = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const updatedArr = [...(essay || [])];
    updatedArr[index] = e.target.value;
    setEssay(updatedArr);
    const a = e.target.value
      .trim()
      .split(/\s+/)

      .filter((item: string) => item !== '');

    setCountWord(a.length);
  };

  return (
    <div className="bg-[#f8f9fa]">
      <div className="flex justify-center items-center gap-[1rem] p-[2rem]">
        <p className="font-bold text-[1.5rem]"></p>
        <button className="bg-[red] py-[.25rem] px-[1rem] rounded-full">
          Quit
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 w-[90%] mx-auto py-[2rem] gap-[1rem] border-b-2 ">
        <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-12 bg-[] bg-[#fff] rounded-xl shadow-2xl py-[2rem]">
          <div className="xl:col-span-7 col-span-12 px-[1rem] bg-[#f8f9fa]">
            <p className="tex-[1rem] font-bold uppercase my-[1rem]">
              {data?.description}
            </p>
            <p className="text-[red] font-bold italic">
              Note : You should spend about {index === 0 ? '20' : '40'} minutes
              on this task. Write about the following topic:
            </p>
            <div className="font-bold my-[1.5rem]">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.questions[0].title || '',
                }}
              />
            </div>

            {data?.questions[0]?.image && (
              <img
                src={
                  typeof data?.questions[0]?.image === 'string'
                    ? data?.questions[0]?.image
                    : URL.createObjectURL(data?.questions[0]?.image)
                }
                alt=""
              />
            )}
          </div>
          <div className="xl:col-span-5 col-span-12 flex flex-col p-[1rem]">
            <NoteInfo index={index} />
            <div className="my-[1rem]">
              <textarea
                className="border-2 rounded-lg p-[1rem]"
                placeholder="Write your essay here"
                name=""
                id=""
                onChange={handleWritingEssay}
                cols={36}
                rows={12}
                value={
                  essay.length && essay[index] !== undefined ? essay[index] : ''
                }
              ></textarea>
              <p>Word count : {countWord}</p>

              <p className="text-[red] italic font-bold">
                Note : Writing fewer than {index === 0 ? '150' : '250'} words
                may result in a lower score as you may not provide sufficient
                information. You should aim for
                {index === 0 ? ' 150-170 ' : ' 250-275 '}
                words in Task {index + 1}.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 ">
          <NavigationTest
            handleTask={handleTask}
            handleIndex={handleIndex}
            defaultPartId={partId}
          />
        </div>
      </div>
    </div>
  );
};

export default Writing;
