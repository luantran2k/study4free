import { useEffect, useState } from 'react';
import { useGetPartByIdQuery } from '../../../store/queries/exams';
import NavigationTest from '../commonComponent/navigationTest';
import { IReadingAnswer } from '../../../interfaces/Reading';
import { ISectionResponse } from '../../../interfaces/SectionResponse';
import { useLocation } from 'react-router-dom';

const Reading = () => {
  const [index, setIndex] = useState<number>(0);
  const [partId, setPartId] = useState<string>('');
  const location = useLocation();
  console.log(location);

  const [answersArr, setAnswersArr] = useState<ISectionResponse>({
    id: location.pathname.split('/')[3],
    section: 'Reading',
    questions: [{ id: partId, answers: [] }],
  });

  const { data, isSuccess, error, isLoading } = useGetPartByIdQuery({
    section: 'Reading',
    partId: partId,
  });

  const handleTask = (task: string) => {
    setPartId(task);
  };

  const handleIndex = (index: number) => {
    setIndex(index);
  };
  useEffect(() => {
    if (partId !== '') {
      setAnswersArr((prev: ISectionResponse) => {
        const questionExists = prev.questions.some(
          (question) => question.id === partId
        );
        if (!questionExists) {
          const updatedQuestions = [
            ...prev.questions.filter((question) => question.id !== ''),
            { id: partId, answers: [] },
          ];
          return { ...prev, questions: updatedQuestions };
        }
        return prev;
      });
    }
  }, [partId]);

  const handleGetValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: IReadingAnswer
  ) => {
    setAnswersArr((prev: ISectionResponse) => {
      const updatedQuestions = prev.questions.map((question) => {
        if (question.id === partId) {
          const updatedAnswers = question.answers;
          const existingAnswerIndex = updatedAnswers.findIndex(
            (answer) => answer.id === item.id
          );
          if (existingAnswerIndex !== -1) {
            updatedAnswers[existingAnswerIndex] = {
              id: item.id,
              value: e.target.value.trim(),
            };
          } else {
            updatedAnswers.push({ id: item.id, value: e.target.value.trim() });
          }
          return { ...question, answers: updatedAnswers };
        }
        return question;
      });
      return { ...prev, questions: updatedQuestions };
    });
  };
  console.log(answersArr);

  return (
    <div className="bg-[#f8f9fa]">
      <div className="flex justify-center items-center gap-[1rem] p-[2rem]">
        <p className="font-bold text-[1.5rem]">READING TEST EXAM</p>
        <button className="bg-[red] py-[.25rem] px-[1rem] rounded-full">
          Quit
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 w-[90%] mx-auto py-[2rem] gap-[1rem] border-b-2 ">
        <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-12  bg-[#fff] rounded-xl shadow-2xl py-[2rem]">
          <div className="xl:col-span-7 col-span-12 px-[1rem] bg-[#f8f9fa] h-[40rem] overflow-y-auto">
            <p className="tex-[1rem] font-bold uppercase my-[1rem]">
              {data?.title}
            </p>
            <p className="tex-[1rem] font-bold uppercase my-[1rem]">
              {data?.description}
            </p>
            <p className="text-[red] font-bold italic">
              Note : You should spend about 20 minutes on this task. Write about
              the following topic:
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.questions[0].description || '',
              }}
            />
          </div>
          <div className="xl:col-span-5 col-span-12 flex flex-col p-[1rem] max-h-[40rem] overflow-y-auto">
            <div className="font-bold my-[1.5rem]">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.questions[0].title || '',
                }}
              />
            </div>
            <div className="flex flex-col gap-[1rem] p-[1rem]">
              {data?.questions[0].answers.map((item, i: number) => {
                return (
                  <div className="flex gap-[1rem]">
                    <label
                      className="bg-[#e8f2ff] w-[35px] aspect-square flex justify-center items-center rounded-full text-[#35509a] font-bold"
                      htmlFor={`${index + i}`}
                    >
                      {i + 1}
                    </label>
                    <input
                      className="border-[#bdc5d1] border-2 rounded-xl px-[0.5rem]"
                      key={index}
                      type="text"
                      value={
                        answersArr?.questions
                          .find((question) => question?.id === partId)
                          ?.answers.find((answer) => answer?.id === item.id)
                          ?.value || ''
                      }
                      onChange={(e) => handleGetValue(e, item)}
                      name={`${index + 1}`}
                    />
                  </div>
                );
              })}
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
export default Reading;
