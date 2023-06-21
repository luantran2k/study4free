import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { Skills } from '../../../../interfaces/Exam';
import { questionSelector } from '../../../../store/selectors/exam';
import { addQuestion } from '../../../../store/slices/examSlice';
import { v4 as uuid } from 'uuid';

type Props = {
  currentSkill: Skills;
  partIndex: number;
};

function Questions(props: Props) {
  const { currentSkill, partIndex } = props;
  const [questionIndex, setQuestionIndex] = useState(0);
  const dispatch = useAppDispatch();
  const questions = useAppSelector(questionSelector(currentSkill, partIndex));
  const question = questions?.[questionIndex];

  const handleAddQuestion = () => {
    dispatch(
      addQuestion({
        currentSkill,
        partIndex,
        question: {
          answer: [{ answer: '', id: uuid() }],
          id: uuid(),
          question: '',
        },
      })
    );
  };
  if (!questions || questions.length === 0) {
    return (
      <div>
        <p className="text-danger text-2xl">No questions</p>
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={handleAddQuestion}
        className="btn  bg-blue-500 hover:bg-blue-500 text-white"
      >
        Add question
      </button>
    </div>
  );
}

export default Questions;
