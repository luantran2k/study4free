import { useState } from 'react';
import AddIcon from '../../../../assets/icons/Add';
import { useAppSelector } from '../../../../hooks/redux';
import { Skills } from '../../../../interfaces/Exam';
import { partSelector } from '../../../../store/selectors/exam';
import Modal from '../../../common/Modal';
import CreatePartForm from '../CreatePartForm';
import Questions from '../Questions';

type Props = {
  currentSkill: Skills;
  totalPart: number;
  modalId: string;
};

function Part({ currentSkill, totalPart, modalId }: Props) {
  const [partIndex, setPartIndex] = useState(0);
  const part = useAppSelector(partSelector(currentSkill, partIndex));
  if (!part)
    return (
      <div>
        <p className="text-danger mt-4 text-2xl">Not exist part</p>
        <Modal
          trigger={
            <button className="btn btn-info text-white bg-blue-500">
              Create Part
            </button>
          }
          modalId={modalId}
        >
          <CreatePartForm currentSkill={currentSkill} modalId={modalId} />
        </Modal>
      </div>
    );
  return (
    <div>
      <div className="flex gap-2 mt-6">
        {Array(totalPart)
          .fill(undefined)
          .map((_, index) => (
            <button
              key={index}
              onClick={() => setPartIndex(index)}
              className={`cursor-pointer bg-base-200 w-8 h-8 rounded-box flex justify-center items-center ${
                index === partIndex ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}
        <Modal
          trigger={
            <button
              className={`cursor-pointer bg-blue-500 text-white w-8 h-8 rounded-box flex justify-center items-center`}
            >
              <AddIcon />
            </button>
          }
          modalId={modalId}
        >
          <CreatePartForm currentSkill={currentSkill} modalId={modalId} />
        </Modal>
      </div>
      <div className="flex gap-6 my-3">
        <h3 className="text-2xl font-medium">
          Part {partIndex + 1}: {part.title}
        </h3>
      </div>
      <Questions currentSkill={currentSkill} partIndex={partIndex} />
    </div>
  );
}

export default Part;
