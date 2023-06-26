import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { mockDataExam, ISections } from '..';
import ClockIcon from '../../../assets/icons/Clock';
import WriteIcon from '../../../assets/icons/Write';

// import LightOn from '../../../assets/icons/LightOn';

const DetailExam = () => {
  const params = useParams();
  const [selectedExam, setSelectedExam] = useState<ISections[]>([]);
  const [value, setValue] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { exam, part } = params;
  // const navigate = useNavigate();
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const selectedDetailExam = mockDataExam
      .filter((detailExam) => detailExam.id === exam)
      .map((ex) => ex.sections.filter((e) => e.id === part))[0];
    setSelectedExam(selectedDetailExam);
  }, [exam, part]);

  return (
    <div className="flex flex-col h-full relative">
      <div className="flex flex-row container mx-auto gap-5 my-10">
        {selectedExam.map((test) => (
          <div className="w-full md:w-3/4 relative">
            <div className="mb-5 p-5 border-2 rounded-2xl">
              <div className="flex flex-row flex-wrap w-full gap-3 mb-2">
                {test.tag.map((t) => (
                  <button className="bg-[#eeeeee] w-fit rounded-xl p-2 text-black text-sm ">
                    #{t}
                  </button>
                ))}
              </div>
              <h3 className="text-4xl text-black font-bold mb-2">
                {test.name}
              </h3>
              <div className="gap-3 items-center w-fit mb-4">
                <a
                  className={`tab tab-lifted tab-lg  ${
                    value === 0 && ' bg-[#e8f2ff] text-2xl font-bold'
                  } text-lg text-black `}
                  onClick={() => handleChange(0)}
                >
                  Test Information
                </a>
                <a
                  className={`tab tab-lifted tab-lg  ${
                    value === 1 && ' bg-[#e8f2ff] text-2xl font-bold'
                  } text-lg text-black `}
                  onClick={() => handleChange(1)}
                >
                  Correct Answers/stranscript
                </a>
              </div>
              {value === 0 ? (
                <React.Fragment>
                  <div className="flex flex-col mb-6">
                    <p className="mb-1 font-bold text-lg text-black">
                      Exam package: {test.name}
                    </p>
                    <div className="flex flex-row items-center gap-2 mb-1">
                      <p>
                        <ClockIcon />
                      </p>
                      <p>
                        Time: 60 mins | {test.parts} parts | {test.questions}{' '}
                        questions | {test.comment} comments
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2 mb-1">
                      <p>
                        <WriteIcon />
                      </p>
                      <p>{test.participates} competitors use this test</p>
                    </div>
                    <p className="italic font-normal text-red-500">
                      Note: to be converted to a scale (for example, on a scale
                      of 990 for TOEIC or 9.0 for IELTS), please choose FULL
                      TEST mode.
                    </p>
                  </div>
                  <div className="gap-3 items-center w-fit mb-4">
                    {/* <a
                                            className={`tab tab-bordered tab-lg font-bold
                                        text-lg hover:text-sky-700 text-sky-700 border-sky-700 hover:border-sky-700`}
                                        >
                                            Practice
                                        </a> */}
                    <a
                      className={`tab tab-bordered tab-lg font-bold text-sky-700
                                             text-lg hover:text-sky-700 hover:border-sky-700`}
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
                  {/* <div className='w-full bg-green-200 p-4 text-green-700 rounded-lg mb-4'>

                                        <p className='font-bold flex flex-row items-center gap-1'>
                                            <LightOn width='20px' height='20px' fill='rgb(21 128 61)' />
                                            Pro Tips:
                                        </p>
                                        The practice of each part and choosing the right amount of time will help you focus on solving the right questions instead of being completely pressured.
                                    </div> */}
                  <div className="w-full bg-[#ffefd8] p-4 text-[#855a1f] rounded-lg mb-4">
                    <p className="font-bold flex flex-row items-center gap-1">
                      Note:
                    </p>
                    Ready to start taking the full test? To get the best
                    results, you need to spend 40 minutes on this test.
                  </div>
                  <NavLink
                    className="btn btn-success text-white"
                    to={part?.split('-')[2] || ''}
                  >
                    Start Exam
                  </NavLink>
                </React.Fragment>
              ) : (
                <h2>!</h2>
              )}
            </div>
            <div className="p-5 border-2 rounded-2xl" ref={ref}>
              <p className="text-xl font-bold mb-2">Comments</p>
              <p className="mb-10">
                Please{' '}
                <NavLink className="hover:text-black text-blue-400" to="login">
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
                      <span className="font-bold">tranyennhi2006vbhp</span>,
                      June 24, 2023
                    </p>
                    <p>
                      ai giải thích dùm mình tsao câu 13 đáp án B lại sai với ạ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
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
