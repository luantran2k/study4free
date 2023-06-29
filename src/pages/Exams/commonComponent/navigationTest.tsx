import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { SectionType } from '../../../components/admin/Exams/Sections';
import { useAppSelector } from '../../../hooks/redux';
import {
  useGetPartIdsBySectionIdQuery,
  useGetSectionResultMutation,
} from '../../../store/queries/exams';
import { NOTIFICATION_TYPE, notify } from '../../../utils/notify';

const NavigationTest = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [time, setTime] = useState(state?.sectionDuration * 60 || 3600);
  const examSectionResponse = useAppSelector(
    (state) => state.exam.examSectionResponse
  );
  const { section = '', sectionId = '', examId } = useParams();
  const { data: sectionData } = useGetPartIdsBySectionIdQuery({
    section: section as SectionType,
    sectionId,
  });

  const [getSectionResult] = useGetSectionResultMutation(undefined);

  useEffect(() => {
    const id = setInterval(() => {
      if (time > 0) {
        setTime((time) => {
          return time - 1;
        });
      } else {
        handleSubmit();
        clearInterval(id);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [time, setTime]);

  const handleSubmit = () => {
    if (examSectionResponse) {
      getSectionResult(examSectionResponse)
        .unwrap()
        .then((result) => {
          navigate('/results/' + result.id);
        })
        .catch((e) => notify(NOTIFICATION_TYPE.ERROR, e.message));
    }
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
        onClick={handleSubmit}
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
          );
        })}
      </div>
    </div>
  );
};

export default NavigationTest;
