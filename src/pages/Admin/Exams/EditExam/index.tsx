import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import CreatePartForm from '../../../../components/admin/Exams/CreatePartForm';
import Modal from '../../../../components/common/Modal';
import { useAppSelector } from '../../../../hooks/redux';
import { Skills } from '../../../../interfaces/Exam';

function EditExam() {
  const exam = useAppSelector((state) => state.exam);
  const [currentPart, setCurrentPart] = useState<Skills>(
    Object.keys(exam.sections || {})[0] as Skills
  );
  const modalId = useId();
  return (
    <div>
      <h1 className="text-3xl mb-4">{exam.title}</h1>
      <div className="flex gap-2">
        {Object.keys(exam.sections || {}).map((skill) => (
          <div
            className={`rounded-box px-4 py-2 cursor-pointer ${
              currentPart === skill ? 'bg-blue-500 text-white' : 'bg-base-200'
            } `}
            onClick={() => setCurrentPart(skill as Skills)}
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
