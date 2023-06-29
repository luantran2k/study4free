import IExam, { ExamSection } from '../../../interfaces/Exam';
import { useGetUserByIdQuery } from '../../../store/queries/users';
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
  const dataStorage = JSON.parse(
    localStorage.getItem('user') as string
  )?.userInfo;
  const { data: userData, isSuccess } = useGetUserByIdQuery(dataStorage?.id);

  // console.log(data);

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
        {subCardProps.map((props: SubCardProps) => {
          console.log(props);
          if (
            userData &&
            userData.payment == false &&
            props.section === 'Speaking'
          )
            return (
              <div className="m-auto font-bold">
                Paid to unlock Speaking skill
              </div>
            );
          if (
            userData &&
            userData.payment == false &&
            props.section === 'Writing'
          )
            return (
              <div className="m-auto font-bold">
                Paid to unlock Wrting skill
              </div>
            );
          else {
            return <ExamSubCard key={props.sectionId} {...props} />;
          }
        })}
      </div>
    </div>
  );
};

export default ExamCard;
