import { NavLink } from 'react-router-dom';
import ChatIcon from '../../../assets/icons/Chat';
import ClockIcon from '../../../assets/icons/Clock';
import WriteIcon from '../../../assets/icons/Write';
import { IMock } from '../../../pages/Exams';
const ExamCard = (props: IMock) => {
  return (
    <div className="mb-8">
      <div className="tabs ">
        <a
          className="tab tab-lifted tab-lg tab-active text-xl font-semibold text-[#23085a] bg-[#e8f2ff]"
          style={{ backgroundColor: '#e8f2ff' }}
        >
          {props.title}
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#e8f2ff] p-4">
        {props.sections.map((section) => (
          <NavLink
            key={section.id}
            to={`${props.id}/${section.id}`}
            className="bg-white rounded-2xl hover:shadow-xl shadow-md w-full hover:-translate-y-2 transition-all p-4 mt-4 flex flex-col justify-between"
          >
            <div className="flex flex-col">
              <h6 className="text-black font-semibold text-xl mb-3">
                {section.name}
              </h6>
              <p className="text-gray-400 text-lg mb-2 font-semibold">
                Exam package: {props.title}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap mb-2 font-medium">
                <div className="flex flex-row items-center gap-2 border-r-2 border-r-gray-400 px-2">
                  <span className="text-gray-400">
                    <ClockIcon />
                  </span>
                  <p className="text-gray-400">60 minutes</p>
                </div>
                <div className="flex flex-row items-center gap-2 border-r-2 border-r-gray-400 px-2">
                  <span className="text-gray-400">
                    <WriteIcon />
                  </span>
                  <p className="text-gray-400">{section.participates}</p>
                </div>
                <div className="flex flex-row items-center gap-2  px-2">
                  <span className="text-white">
                    <ChatIcon />
                  </span>
                  <p className="text-gray-400">{section.comment}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap mb-2 font-medium">
                <div className="flex w-1/3 flex-row items-center gap-2 border-r-2 border-r-gray-400 px-2">
                  <p className="text-gray-400">{section.parts} parts</p>
                </div>
                <div className="flex w-2/3 flex-row items-center gap-2 px-2">
                  <p className="text-gray-400">{section.questions} questions</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row gap-2 flex-wrap mb-8">
                {section.tag.map((t) => (
                  <button className="text-blue-500 w-fit rounded-xl p-2 bg-blue-100 text-sm ">
                    #{t}
                  </button>
                ))}
              </div>
            </div>
            <button className="text-blue-400 text-xl w-full rounded-xl py-2 border-2 border-blue-400 bg-white hover:bg-blue-400 hover:text-white transition-all">
              Details
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ExamCard;
