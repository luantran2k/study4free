import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import CreatePartForm from '../../../../components/admin/Exams/CreatePartForm';
import Part from '../../../../components/admin/Exams/Part';
import Modal from '../../../../components/common/Modal';
import { useAppSelector } from '../../../../hooks/redux';
import { Skills } from '../../../../interfaces/Exam';

function EditExam() {
  const exam = useAppSelector((state) => state.exams);
  const [currentSkill, setCurrentSkill] = useState<Skills>(
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
              currentSkill === skill ? 'bg-blue-500 text-white' : 'bg-base-200'
            } `}
            onClick={() => setCurrentSkill(skill as Skills)}
            key={skill}
          >
            {skill[0].toUpperCase() + skill.slice(1)}
          </div>
        ))}
      </div>

      <Part
        currentSkill={currentSkill}
        totalPart={exam.sections?.[currentSkill]?.parts.length || 0}
        modalId={modalId}
      />

      <div className="flex gap-3 mt-8 ">
        <Link to="/admin/exams" className="btn">
          Back
        </Link>
      </div>
    </div>
  );
}

export default EditExam;
