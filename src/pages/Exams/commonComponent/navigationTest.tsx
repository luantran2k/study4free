import { useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { SectionType } from '../../../components/admin/Exams/Sections';
import { useAppSelector } from '../../../hooks/redux';
import {
  useGetPartIdsBySectionIdQuery,
  useGetSectionResultMutation,
} from '../../../store/queries/exams';

// interface Props {
//   handleTask: (task: string) => void;
//   handleIndex: (index: number) => void;
//   defaultPartId: string;
// }

//{ handleTask, handleIndex, defaultPartId }: Props
const NavigationTest = () => {
  const { state } = useLocation();
  const [time, setTime] = useState<number>(state?.sectionDuration * 60 || 3600);
  const examSectionResponse = useAppSelector(
    (state) => state.exam.examSectionResponse
  );
  const {
    section = '',
    sectionId = '',
    examId,
    partId: partIdParam,
  } = useParams();
  const { data: sectionData } = useGetPartIdsBySectionIdQuery({
    section: section as SectionType,
    sectionId,
  });

  const [getSectionResult] = useGetSectionResultMutation(undefined);

  const handleSunmit = () => {
    if (examSectionResponse) {
      getSectionResult(examSectionResponse)
        .unwrap()
        .then((res) => {
          console.log(res);
        });
    }
    // if (time > 0) {
    //   const realTime = Date.now();
    //   if (confirm('Do you want to submit answers?')) {
    //     console.log('submit');
    //   }
    //   const realTime2 = Date.now();
    //   const subtract = Math.floor((realTime2 - realTime) / 1000);
    //   if (time > subtract) {
    //     setTime((prev) => prev - subtract);
    //   } else {
    //     setTime(0);
    //   }
    // } else {
    //   console.log('stop');
    // }
  };
  return (
    <div className="rounded- shadow-2xl p-[2rem] flex flex-col w-3/12 ">
      <div className="flex flex-row md:flex-col items-center my-[.75rem]">
        <div className="">Time left :</div>
        <span className="font-bold text-[1.5rem]">
          {' '}
          <div id={`seconds `} className={`${time < 5 ? 'warning' : ''}`}>
            {time === 0 ? (
              <span className="end">End!</span>
            ) : (
              `${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${
                time % 60
              }`
            )}
          </div>
        </span>
      </div>
      <button
        onClick={handleSunmit}
        className="border-2 border-[#35509a] text-[#35509a] py-[0.5rem] px-[1rem] rounded-xl font-medium hover:bg-[#35509a] hover:text-[#fff]"
      >
        Submit
      </button>
      <p className="text-[#ffad3c] font-bold italic my-[0.75rem]">
        You can click on the question number in the article to mark the review
      </p>
      <div className="flex flex-col [&_a]:p-2 [&_a]:rounded-md [&_.active]:bg-blue-600 [&_.active]:text-white">
        {sectionData?.parts?.map(({ id: partId }, index) => {
          return (
            <NavLink
              to={`/exams/${examId}/${section}/${sectionId}/${partId}`}
              key={index}
            >
              Part {index + 1}
            </NavLink>
            // <div
            //   key={index}
            //   className="my-[1rem] flex justify-center items-center"
            // >
            //   <label className=" flex items-center gap-[1rem]">
            //     <span className="label-text font-bold text-[1.25rem]">
            //       Task {index + 1}
            //     </span>
            //     <input
            //       className="radio checked:bg-red-500"
            //       type="radio"
            //       name="task"
            //       // onChange={() => {
            //       //   getPartId(item.id);
            //       //   getPartIndex(index);
            //       // }}
            //       value={index}
            //       checked={partId == item.id}
            //     />
            //   </label>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationTest;
