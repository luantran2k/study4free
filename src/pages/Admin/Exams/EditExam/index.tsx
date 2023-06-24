import { useCallback, useEffect, useId, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sections, {
  SectionType,
} from '../../../../components/admin/Exams/Sections';
import { ExamSection, Skills, skills } from '../../../../interfaces/Exam';
import { useGetExamByIdQuery } from '../../../../store/queries/exams';

function EditExam() {
  const { id } = useParams();
  const { data: exam, isLoading, isError } = useGetExamByIdQuery(id || '');
  const [currentSkill, setCurrentSkill] = useState<Skills>(
    Object.keys(exam?.sections || {})[0] as Skills
  );
  const modalId = useId();
  const getSection = useCallback((section: ExamSection) => {
    return Object.keys(section || {}).filter((key) => {
      if (
        skills.includes((key[0].toUpperCase() + key.slice(1)) as Skills) &&
        section[key as keyof ExamSection]
      ) {
        return true;
      }
      return false;
    });
  }, []);

  useEffect(() => {
    if (exam?.sections) {
      setCurrentSkill(getSection(exam.sections)[0] as Skills);
    }
  }, [exam, setCurrentSkill, getSection]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError || !exam) {
    return <p>Error</p>;
  }

  // const partIds =
  //   exam.sections[currentSkill as keyof typeof exam.sections]?.parts?.map(
  //     (part) => part.id
  //   ) || [];
  // const sectionId: string = exam.sections[
  //   currentSkill?.toLowerCase() as keyof ExamSection
  // ]?.id as string;

  // console.log(sectionId);
  const sections = Object.keys(exam.sections)
    .filter((key) => {
      return exam.sections[key as keyof ExamSection]?.id;
    })
    .map((key) => ({
      name: (key[0].toUpperCase() + key.slice(1)) as SectionType,
      id: exam.sections[key as keyof ExamSection]?.id as string,
    }));
  return (
    <div>
      <h1 className="text-3xl mb-4">{exam.title}</h1>
      <Sections sections={sections} />

      {/* {currentSkill &&
      sectionId &&
      exam?.sections[currentSkill as keyof ExamSection]?.id ? (
        <Part
          currentSkill={currentSkill}
          partIds={partIds}
          modalId={modalId}
          sectionId={sectionId}
        />
      ) : (
        <NotExistPart
          currentSkill={currentSkill}
          modalId={modalId}
          sectionId={sectionId}
        />
      )} */}
      <div className="flex gap-3 mt-8 ">
        <Link to="/admin/exams" className="btn">
          Back
        </Link>
      </div>
    </div>
  );
}

export default EditExam;
