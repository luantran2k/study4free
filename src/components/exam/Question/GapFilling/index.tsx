import { useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import IQuestion from '../../../../interfaces/Question';
import {
  updateAnswerResponse,
  updateQuestionResponse,
} from '../../../../store/slices/examSlice';
import MediaViewer from '../../MediaViewer';

function GapFilling(question: IQuestion & { index: number }) {
  const { title, description, audio, answers, id, image, index } = question;
  const dispatch = useAppDispatch();
  const answersReponse = useAppSelector(
    (state) =>
      state.exam.examSectionResponse?.questions.find(
        (question) => question.id === id
      )?.answers
  );

  useEffect(() => {
    dispatch(
      updateQuestionResponse({
        questionType: 'Gap filling',
        answers:
          answers?.map((answer) => ({
            id: answer.id,
            value: '',
          })) || [],
        id,
      })
    );
  }, [id]);
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-[1rem]">
      <div>
        <p className="text-xl font-medium ml-4">Question {index + 1}:</p>
        <ReactQuill value={title} readOnly={true} theme="bubble" />
        <ReactQuill value={description} readOnly={true} theme="bubble" />
        <MediaViewer audio={audio as string} image={image as string} />
      </div>
      <div className="flex flex-col gap-4">
        {answers?.map((answer, index: number) => {
          return (
            <div className="flex gap-[1rem]" key={index}>
              <label
                className="bg-[#e8f2ff] w-[35px] aspect-square flex justify-center items-center rounded-full text-[#35509a] font-bold"
                htmlFor={`${id + index}-${index}`}
              >
                {index + 1}
              </label>
              <input
                className="border-[#bdc5d1] border-2 rounded-xl px-[0.5rem]"
                key={id}
                type="text"
                value={
                  answersReponse?.find((a) => a.id === answer.id)?.value || ''
                }
                id={`${id + 1}-${index}`}
                name={`${id + 1}-${index}`}
                onChange={(e) => {
                  dispatch(
                    updateAnswerResponse({
                      questionId: id,
                      questionType: 'Gap filling',
                      answer: {
                        id: answer.id,
                        value: e.target.value,
                      },
                    })
                  );
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GapFilling;
