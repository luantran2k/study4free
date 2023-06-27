import { NavLink } from 'react-router-dom';
import ChatIcon from '../../../assets/icons/Chat';
import ClockIcon from '../../../assets/icons/Clock';
import WriteIcon from '../../../assets/icons/Write';
import { useEffect, useState } from 'react';
import { useGetExamsQuery } from '../../../store/queries/exams';

const ExamCard = (props: any) => {
  const [IdArr, setIdArr] = useState([]);

  useEffect(() => {
    const cutArr: any = Object.values(props?.sections);
    cutArr.shift();
    setIdArr(cutArr);
  }, []);
  return (
    <div className="mb-8">
      <div className="tabs ">
        <a
          className="tab tab-lifted tab-lg tab-active text-xl font-semibold text-[#23085a] bg-[#e8f2ff]"
          style={{ backgroundColor: '#e8f2ff' }}
        >
          {props?.title}
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#e8f2ff] p-4">

        {IdArr?.map((section: any, index: number) => {
          let sectionType = '';
          if (index === 0) {
            sectionType = 'Listening';
          } else if (index === 1) {
            sectionType = 'Reading';
          } else if (index === 2) {
            sectionType = 'Speaking';
          } else {
            sectionType = 'Writing';
          }
          return (
            <NavLink
              to={`${sectionType.toLowerCase()}/${section}`}
              state={{ sectionType, section, props }}
              className="bg-white rounded-2xl hover:shadow-xl shadow-md w-full hover:-translate-y-2 transition-all p-4 mt-4 flex flex-col justify-between"
            >
              <h6 className="text-black font-semibold text-xl mb-3">
                {props?.title} {sectionType}
              </h6>
              <p className="text-gray-400 text-lg mb-2 font-semibold">
                Exam package:   {props?.title}
              </p>
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
                  <p className="text-gray-400">31251</p>
                </div>
                <div className="flex flex-row items-center gap-2  px-2">
                  <span className="text-white">
                    <ChatIcon />
                  </span>
                  <p className="text-gray-400">258</p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap mb-6 font-medium">
                <div className="flex w-1/3 flex-row items-center gap-2 border-r-2 border-r-gray-400 px-2">
                  <p className="text-gray-400">3 parts</p>
                </div>
                <div className="flex w-2/3 flex-row items-center gap-2 px-2">
                  <p className="text-gray-400">40 questions</p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default ExamCard;
