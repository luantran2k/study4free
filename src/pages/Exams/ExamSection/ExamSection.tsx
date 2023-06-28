import { Outlet, useParams } from 'react-router-dom';
import ExamPart from '../../../components/exam/ExamPart';
import NavigationTest from '../commonComponent/navigationTest';

const ExamSection = () => {
  const { section, sectionId } = useParams();

  return (
    <div className="bg-[#f8f9fa]">
      <div className="flex justify-center items-center gap-[1rem] p-[2rem]">
        <p className="font-bold text-[1.5rem]">
          {section?.toUpperCase()} TEST EXAM
        </p>
        <button className="bg-[red] py-[.25rem] px-[1rem] rounded-full">
          Quit
        </button>
      </div>
      <div className="flex w-[90%] mx-auto py-[2rem] gap-4 border-b-2 ">
        <div className="flex-1">
          <Outlet />
        </div>
        {sectionId && (
          <NavigationTest
          // handleTask={handleTask}
          // handleIndex={handleIndex}
          // defaultPartId={partId}
          />
        )}
      </div>
    </div>
  );
};

export default ExamSection;
