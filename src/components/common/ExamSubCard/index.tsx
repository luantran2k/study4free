import { NavLink } from 'react-router-dom';
import ClockIcon from '../../../assets/icons/Clock';
import WriteIcon from '../../../assets/icons/Write';
import { SectionType } from '../../admin/Exams/Sections';

export type SubCardProps = {
  examId: string;
  title: string;
  section: SectionType;
  sectionId: string;
  time: number;
  numberOfCompleted: number;
};

function ExamSubCard(props: SubCardProps) {
  const { examId, title, section, time, numberOfCompleted } = props;
  return (
    <NavLink
      to={`${examId}/${section}`}
      //   state={{ sectionType, sectionId, props }}
      className="bg-white rounded-2xl hover:shadow-xl shadow-md w-full hover:-translate-y-2 transition-all p-4 mt-4 flex flex-col justify-between"
    >
      <h6 className="text-black font-semibold text-xl mb-3">
        {title} {section}
      </h6>
      <p className="text-gray-400 text-lg mb-2 font-semibold">
        Exam package: {title}
      </p>
      <div className="flex flex-row flex-wrap mb-2 font-medium">
        <div className="flex flex-row items-center gap-2 border-r-2 border-r-gray-400 px-2">
          <span className="text-gray-400">
            <ClockIcon />
          </span>
          <p className="text-gray-400">{time} minutes</p>
        </div>
        <div className="flex flex-row items-center gap-2 border-r-2 border-r-gray-400 px-2">
          <span className="text-gray-400">
            <WriteIcon />
          </span>
          <p className="text-gray-400">{numberOfCompleted}</p>
        </div>
        {/* <div className="flex flex-row items-center gap-2  px-2">
          <span className="text-white">
            <ChatIcon />
          </span>
          <p className="text-gray-400">258</p>
        </div> */}
      </div>
      {/* <div className="flex flex-row flex-wrap mb-6 font-medium">
        <div className="flex w-1/3 flex-row items-center gap-2 border-r-2 border-r-gray-400 px-2">
          <p className="text-gray-400">{numberOfPart} parts</p>
        </div>
        <div className="flex w-2/3 flex-row items-center gap-2 px-2">
          <p className="text-gray-400">{numberOfQuestion} questions</p>
        </div>
      </div> */}
    </NavLink>
  );
}

export default ExamSubCard;
