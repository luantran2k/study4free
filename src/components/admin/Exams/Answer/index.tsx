import { useState } from 'react';
import TrashIcon from '../../../../assets/icons/Trash';
import IAnswer from '../../../../interfaces/Answer';
import {
  useRemoveAnswerMutation,
  useUpdateAnswerMutation,
} from '../../../../store/queries/exams';
import { SectionType } from '../Sections';

type Props = {
  index: number;
  section: SectionType;
  answer: IAnswer;
};

function Answer({ answer, section, index }: Props) {
  const [value, setValue] = useState(answer.value);
  const [updateAnswer] = useUpdateAnswerMutation();
  const [removeAnswer] = useRemoveAnswerMutation();
  return (
    <li className="flex items-center gap-4 ">
      <span className="select-none">{index + 1}.</span>
      <input
        type="text"
        value={value}
        className="input input-bordered flex-1"
        onChange={(e) => setValue(e.target.value)}
        onBlur={() =>
          updateAnswer({ answerId: answer.id, section, data: { value } })
        }
      />
      <span
        onClick={() => removeAnswer({ answerId: answer.id, section })}
        className="active:translate-y-1 transition-all cursor-pointer bg-red-500 text-white w-8 h-8 rounded-box flex justify-center items-center"
      >
        <TrashIcon />
      </span>
    </li>
  );
}

export default Answer;
