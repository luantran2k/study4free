import { useState } from 'react';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router-dom';
import { useGetPartByIdQuery } from '../../../store/queries/exams';
import CircleButton from '../../common/CircleButton';

function ListeningPart() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const { partId = '' } = useParams();
  const { data: part } = useGetPartByIdQuery({
    section: 'Listening',
    partId,
  });
  return (
    <>
      <div className="flex flex-col p-[1rem] h-[40rem] overflow-y-auto">
        {part?.type === 'Gap filling' && (
          <div className="flex flex-col gap-[1rem] p-[1rem]">
            <ReactQuill
              value={part.questions[questionIndex].title}
              readOnly={true}
              theme="bubble"
            />
            <ReactQuill
              value={part.questions[questionIndex].description}
              readOnly={true}
              theme="bubble"
            />
            {part?.questions[questionIndex].answers.map((a, i: number) => {
              return (
                <div className="flex gap-[1rem]">
                  <label
                    className="bg-[#e8f2ff] w-[35px] aspect-square flex justify-center items-center rounded-full text-[#35509a] font-bold"
                    htmlFor={`${partId + i}-${i}`}
                  >
                    {i + 1}
                  </label>
                  <input
                    className="border-[#bdc5d1] border-2 rounded-xl px-[0.5rem]"
                    key={partId}
                    type="text"
                    id={`${partId + 1}-${i}`}
                    name={`${partId + 1}-${i}`}
                  />
                </div>
              );
            })}
          </div>
        )}
        {part?.type === 'Single choice' && (
          <div>
            <div className="flex flex-col gap-[2rem] p-[1rem]">
              {part?.questions.map((item, i1: number) => {
                return (
                  <div className="flex gap-[0.5rem] flex-col">
                    <div className="flex gap-[1rem] ">
                      <div className="bg-[#e8f2ff] w-[35px] h-[35px] aspect-square flex justify-center items-center rounded-full text-[#35509a] font-bold">
                        {i1 + 1}
                      </div>
                      <div
                        className="xl:text-lg font-bold my-auto"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    </div>
                    {item.answers.map((answer, i2) => {
                      return (
                        <div className="flex items-center gap-[0.5rem]">
                          <input
                            type="radio"
                            name={`${i1}`}
                            //   onClick={(e) => handleGetValue(e, answer)}
                            //   value={answer.value}
                            //   defaultChecked={answersArr?.questions
                            //     .find((question) => question?.id === partId)
                            //     ?.answers.some((item) => item.id === answer.id)}
                          ></input>
                          <label htmlFor={`${partId + 1}-${i2}`}>
                            {answer.value}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 items-center mt-8">
        <p className="text-xl font-medium">Question: </p>
        {part?.questions?.map((_, index: number) => {
          return (
            <CircleButton active={index === questionIndex} key={index}>
              {index + 1}
            </CircleButton>
          );
        })}
      </div>
    </>
  );
}

export default ListeningPart;
