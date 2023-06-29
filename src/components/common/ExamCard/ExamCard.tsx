import IExam, { ExamSection } from '../../../interfaces/Exam';
import { getSectionName, getSectionTime } from '../../../utils/exam';
import ExamSubCard, { SubCardProps } from '../ExamSubCard';

const ExamCard = (exam: IExam) => {
  const subCardProps: SubCardProps[] = Object.keys(exam.sections)
    .filter((key) => key.includes('SectionId'))
    .map((key) => ({
      examId: exam.id,
      title: exam.title,
      section: getSectionName(key),
      sectionId: exam.sections[key as keyof ExamSection] as string,
      time: getSectionTime(exam.duration, getSectionName(key)),
      numberOfCompleted: 0,
    }));
  return (
    <div className="mb-8">
      <div className="tabs ">
        <a
          className="tab tab-lifted tab-lg tab-active text-xl font-semibold text-[#23085a] bg-[#e8f2ff]"
          style={{ backgroundColor: '#e8f2ff' }}
        >
          {exam?.title}
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#e8f2ff] p-4">
        {subCardProps.map((props: SubCardProps) => (
          <ExamSubCard key={props.sectionId} {...props} />
        ))}
      </div>
    </div>
  );
};

export default ExamCard;
