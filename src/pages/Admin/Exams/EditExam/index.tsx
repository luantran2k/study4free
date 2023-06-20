import { Link } from 'react-router-dom';
import IExam from '../../../../interfaces/Exam';
import { useId, useState } from 'react';
import Modal from '../../../../components/common/Modal';
import CreatePartForm from '../../../../components/admin/Exams/CreatePartForm';

const skills = ['Listening', 'Reading', 'Writing', 'Speaking'] as const;

let exam: IExam | undefined;

function EditExam() {
  const [currentPart, setCurrentPart] =
    useState<(typeof skills)[number]>('Listening');
  const modalId = useId();
  return (
    <div>
      <h1 className="text-3xl mb-4">{exam ? 'Edit Exam' : 'Create Exam'}</h1>
      <div className="flex gap-2">
        {skills.map((skill) => (
          <div
            className={`rounded-box px-4 py-2 cursor-pointer ${
              currentPart === skill ? 'bg-blue-500 text-white' : 'bg-base-200'
            } `}
            onClick={() => setCurrentPart(skill)}
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-8 ">
        <Modal
          trigger={
            <button className="btn bg-blue-500 text-white hover:bg-blue-500">
              Create Part
            </button>
          }
          modalId={modalId}
        >
          <CreatePartForm />
        </Modal>
        <Link to="/admin/exams" className="btn">
          Back
        </Link>
      </div>
    </div>
  );
}

export default EditExam;
