import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useEffect, useState } from 'react';
import AddIcon from '../../../../assets/icons/Add';
import TrashIcon from '../../../../assets/icons/Trash';
import {
  useCreateQuestionMutation,
  useRemoveQuestionMutation,
} from '../../../../store/queries/exams';
import Question from '../Question';
import { SectionType } from '../Sections';

type Props = {
  partId: string;
  section: SectionType;
  questionIds: string[];
};

function Questions({ partId, questionIds, section }: Props) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [removeQuestion] = useRemoveQuestionMutation();
  const [createQuestion] = useCreateQuestionMutation();
  const [parent] = useAutoAnimate();

  useEffect(() => {
    setQuestionIndex(0);
  }, [partId]);

  useEffect(() => {
    if (questionIds.length == 0) {
      setQuestionIndex(0);
    } else if (questionIds.length <= questionIndex) {
      setQuestionIndex((pre) => pre - 1);
    }
  }, [questionIds]);
  return (
    <>
      <div className="flex gap-2 items-center my-8" ref={parent}>
        <p className="text-xl font-medium">Question: </p>
        {questionIds.map((id, index) => (
          <button
            key={id}
            onClick={() => {
              setQuestionIndex(index);
            }}
            className={`active:translate-y-1 transition-all relative cursor-pointer  bg-base-200 w-8 h-8 rounded-box flex justify-center items-center ${
              index === questionIndex ? 'bg-blue-500 text-white' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`active:translate-y-1 transition-all relative cursor-pointer text-white bg-red-500 w-8 h-8 rounded-box flex justify-center items-center `}
          onClick={() =>
            removeQuestion({ questionId: questionIds[questionIndex], section })
          }
        >
          <TrashIcon />
        </button>

        <button
          className={`active:translate-y-1 transition-all cursor-pointer bg-blue-500 text-white w-8 h-8 rounded-box flex justify-center items-center`}
          onClick={() => {
            createQuestion({
              section,
              partId,
            });
          }}
        >
          <AddIcon />
        </button>
      </div>
      {questionIds[questionIndex] ||
      questionIds[questionIndex]?.length === 0 ? (
        <Question section={section} questionId={questionIds[questionIndex]} />
      ) : (
        <p>No question in this part</p>
      )}
    </>
  );
}

export default Questions;
