import { useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import IQuestion from '../../../../interfaces/Question';
import { IAnswerResponse } from '../../../../interfaces/SectionResponse';
import {
  updateAnswerResponse,
  updateQuestionResponse,
} from '../../../../store/slices/examSlice';
import MediaViewer from '../../MediaViewer';

function SingleChoice(question: IQuestion & { index: number }) {
  const { title, audio, answers, id, image, index } = question;
  const answersResponse: IAnswerResponse[] | undefined = useAppSelector(
    (state) =>
      state.exam.examSectionResponse?.questions.find(
        (question) => question.id === id
      )?.answers
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      updateQuestionResponse({
        questionType: 'Single choice',
        answers: answers.map((answer) => ({
          id: answer.id,
          value: answer.value,
        })),
        id,
      })
    );
  }, [id]);
  return (
    <div className="flex gap-[0.5rem] flex-col">
      <div className="flex gap-[1rem] ">
        <div className="bg-[#e8f2ff] w-[35px] h-[35px] aspect-square flex justify-center items-center rounded-full text-[#35509a] font-bold">
          {index + 1}
        </div>
        <ReactQuill value={title} readOnly={true} theme="bubble" />
      </div>
      <MediaViewer audio={audio as string} image={image as string} />
      {answers?.map((answer, answerIndex) => {
        return (
          <div className="flex items-center gap-[0.5rem]" key={answerIndex}>
            <input
              type="radio"
              checked={
                answersResponse?.find(
                  (answerResponse) => answerResponse.id === answer.id
                )?.isTrue || false
              }
              onChange={(e) => {
                dispatch(
                  updateAnswerResponse({
                    questionType: 'Single choice',
                    questionId: id,
                    answer: {
                      ...(answersResponse?.find(
                        (answerResponse) => answerResponse.id === answer.id
                      ) || {}),
                      isTrue: e.target.checked,
                    },
                  })
                );
              }}
            ></input>
            <label
              onClick={() => {
                dispatch(
                  updateAnswerResponse({
                    questionType: 'Single choice',
                    questionId: id,
                    answer: {
                      ...(answersResponse?.find(
                        (answerResponse) => answerResponse.id === answer.id
                      ) || {}),
                      isTrue: true,
                    },
                  })
                );
              }}
            >
              {answer.value}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default SingleChoice;
