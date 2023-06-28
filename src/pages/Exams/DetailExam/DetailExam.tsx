import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ClockIcon from '../../../assets/icons/Clock';
import WriteIcon from '../../../assets/icons/Write';
import { useGetExamsQuery } from '../../../store/queries/exams';

// import LightOn from '../../../assets/icons/LightOn';

const DetailExam = () => {
  const { type } = useParams();
  const [selectedExam, setSelectedExam] = useState<any>({});
  const [value, setValue] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const { data, isLoading } = useGetExamsQuery({
    page: 0,
    quantity: 4,
    title: '',
    isNeedPaid: "All",
    type:"All"
  });

  console.log(data);

  useEffect(() => {
    setSelectedExam(data);
  }, [isLoading]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [type]);

  return (
    <div className="flex flex-col h-full relative">
      <div className="flex flex-row container mx-auto gap-5 my-10">
        <div className="w-full md:w-3/4 relative">
          <div className="mb-5 p-5 border-2 rounded-2xl">
            <div className="flex flex-row flex-wrap w-full gap-3 mb-2">
              <button className="bg-[#eeeeee] w-fit rounded-xl p-2 text-black text-sm pointer-events-none">
                #{selectedExam[0]?.type}
              </button>
              <button className="bg-[#eeeeee] w-fit rounded-xl p-2 text-black text-sm pointer-events-none">
                #{type?.replace(type[0], type[0].toUpperCase())}
              </button>
            </div>
            <h3 className="text-4xl text-black font-bold mb-4">
              {selectedExam[0]?.title}{' '}
              {type?.replace(type[0], type[0].toUpperCase())}
            </h3>
            <div className="gap-3 items-center w-fit mb-4">
              <a
                className={`text-xl font-bold
                   bg-sky-100 text-blue-500 pointer-events-none p-4  inline-block rounded-2xl`}
              >
                Test Information
              </a>
            </div>
            <div className="flex flex-col mb-6">
              <p className="mb-1 font-bold text-lg text-black">
                Exam package: {selectedExam[0]?.title}
              </p>
              <div className="flex flex-row items-center gap-2 mb-1">
                <p>
                  <ClockIcon />
                </p>
                <p>Time: 60 mins | 4 parts | 40 questions | 3211 comments</p>
              </div>
              <div className="flex flex-row items-center gap-2 mb-1">
                <p>
                  <WriteIcon />
                </p>
                <p>212 competitors use this test</p>
              </div>
              <p className="italic font-normal text-red-500">
                Note: to be converted to a scale (for example, on a scale of 990
                for TOEIC or 9.0 for IELTS), please choose FULL TEST mode.
              </p>
            </div>
            <div className="gap-3 items-center w-fit mb-4">
              <a
                className={`tab tab-bordered tab-lg font-bold text-sky-700
                                             text-lg hover:text-sky-700 border-sky-700 pointer-events-none`}
              >
                Entry Full Test
              </a>
              <button
                className={`tab scroll-smooth tab-bordered tab-lg font-bold
                                         text-lg hover:text-sky-700 hover:border-sky-700`}
                onClick={() =>
                  ref.current?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Comments
              </button>
            </div>

            <div className="w-full bg-[#ffefd8] p-4 text-[#855a1f] rounded-lg mb-4">
              <p className="font-bold flex flex-row items-center gap-1">
                Note:
              </p>
              Ready to start taking the full test? To get the best results, you
              need to spend 60 minutes on this test.
            </div>

            <NavLink className="btn btn-success text-white" to="asdasdasdas">
              Start Exam
            </NavLink>
          </div>
          <div className="p-5 border-2 rounded-2xl" ref={ref}>
            <p className="text-xl font-bold mb-2">Comments</p>
            <p className="mb-10">
              Please{' '}
              <NavLink className="hover:text-black text-blue-400" to="/login">
                login
              </NavLink>{' '}
              to comment
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 justify-start">
                <figure className="rounded-[50%] bg-gray-400 flex justify-center items-center p-3 font-bold w-8 h-8">
                  T
                </figure>
                <div className="flex flex-col">
                  <p>
                    <span className="font-bold">tranyennhi2006vbhp</span>, June
                    24, 2023
                  </p>
                  <p>
                    ai giải thích dùm mình tsao câu 13 đáp án B lại sai với ạ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-1/4 relative">
          <div className="flex flex-col border-2 border-gray-200 rounded-2xl items-center justify-center gap-3 w-full min-h-[60vh] mx-auto">
            <p className="text-xl lg:text-2xl uppercase ">Advertisement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailExam;
