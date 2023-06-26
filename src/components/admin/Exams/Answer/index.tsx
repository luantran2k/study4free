import { ChangeEvent, useState } from 'react';
import TrashIcon from '../../../../assets/icons/Trash';
import { useAppSelector } from '../../../../hooks/redux';
import IAnswer from '../../../../interfaces/Answer';
import {
  useRemoveAnswerMutation,
  useUpdateAnswerMutation,
} from '../../../../store/queries/exams';
import { SectionType } from '../Sections';

type Props = {
  index: number;
  section: SectionType;
  answers: IAnswer[];
} & IAnswer;

function Answer({
  answers,
  isTrue,
  value: defaultValue,
  id,
  section,
  index,
}: Props) {
  const [value, setValue] = useState(defaultValue);
  const [updateAnswer] = useUpdateAnswerMutation();
  const [removeAnswer] = useRemoveAnswerMutation();

  const { partType, questionId } = useAppSelector(
    (state) => state.exam.examEditInfo
  );

  const updateSingleChoice = async (e: ChangeEvent<HTMLInputElement>) => {
    const previousTrueAnswers = answers.filter((answer) => answer.isTrue);
    if (previousTrueAnswers) {
      await Promise.all(
        previousTrueAnswers.map(async (answer) => {
          return updateAnswer({
            answerId: answer.id,
            section,
            data: { isTrue: false },
          });
        })
      );
    }
    updateAnswer({
      answerId: id,
      section,
      data: { isTrue: !e.target.checked },
    });
  };

  return (
    <li className="flex items-center gap-4 ">
      {partType === 'Multiple choice' && (
        <input
          type="checkbox"
          name={questionId}
          className="checkbox"
          defaultChecked={isTrue}
          onChange={(e) => {
            updateAnswer({
              answerId: id,
              section,
              data: { isTrue: e.target.checked },
            });
          }}
        />
      )}
      {partType === 'Single choice' && (
        <input
          type="radio"
          name={questionId}
          checked={isTrue}
          className="radio"
          onChange={updateSingleChoice}
        />
      )}

      <span className="select-none">{index + 1}.</span>
      <input
        type="text"
        value={value}
        className="input input-bordered flex-1"
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => updateAnswer({ answerId: id, section, data: { value } })}
      />
      <span
        onClick={() => removeAnswer({ answerId: id, section })}
        className="active:translate-y-1 transition-all cursor-pointer bg-red-500 text-white w-8 h-8 rounded-box flex justify-center items-center"
      >
        <TrashIcon />
      </span>
    </li>
  );
}

export default Answer;
