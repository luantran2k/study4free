import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import CommentIcon from '../../assets/icons/CommentIcon';
import { helpItem, sectionItem, webItem } from './index';
const SectionPage = () => {
  const location = useParams();
  const { section } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [section]);

  return (
    <div className="flex flex-col h-full relative mx-auto container">
      {sectionItem
        .filter((sec) => sec.to === section)
        .map((sec) => (
          <div className="flex flex-row my-10" key={section}>
            <div className="lg:w-2/3 w-full px-2 sm:px-0">
              <p className="text-md mb-6">
                <NavLink
                  to="/grammar"
                  className=" text-[#23085a] hover:underline hover:text-green-400"
                >
                  Grammar
                </NavLink>{' '}
                &gt; {sec.title}
              </p>
              <p className="mb-8 text-4xl font-bold text-[#23085a]">
                {sec.title}
              </p>
              <div className="w-full mb-6">
                <img
                  src={sec.imgUrl}
                  className="w-full h-auto rounded-br-3xl"
                />
              </div>
              <div
                className="mb-6 text-2xl"
                dangerouslySetInnerHTML={{ __html: sec.detailDes }}
              />
              <p className="mb-10 text-3xl font-bold text-[#23085a]">
                Choose a grammar lesson
              </p>

              <div className="mb-20">
                {sec.lessons.map(
                  ({ lesson, id, to, imgUrl, descript, comment }) => (
                    <div
                      className=" flex flex-row relative pb-10 sm:mb-10 mb-24"
                      key={id}
                    >
                      <NavLink to={`${to}`} className="w-full">
                        <img src={imgUrl} className="h-full w-full sm:w-3/5" />
                      </NavLink>
                      <div className=" bg-white w-[90vw]  sm:w-[350px] lg:w-[400px] h-3/4 xl:w-[500px] p-6 lg:p-10 absolute bottom-[-70px] right-0 left-0 m-auto sm:m-0 sm:left-auto sm:bottom-0 sm:right-[100px] md:rounded-tl-3xl rounded-3xl">
                        <NavLink
                          to={`${to}`}
                          className="mb-1 lg:mb-3 block text-2xl font-bold text-[#23085a] hover:underline hover:text-green-400"
                        >
                          {lesson}
                        </NavLink>
                        <p
                          className="mb-4 xl:text-lg"
                          dangerouslySetInnerHTML={{ __html: descript }}
                        />
                        <div className="hidden lg:flex flex-row items-center gap-3">
                          <p>
                            <CommentIcon />
                          </p>
                          <p>{comment}</p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
              <p className="mb-4 text-3xl font-bold text-[#23085a]">
                Learn to use grammar correctly and confidently
              </p>
              <p className="mb-4 text-2xl">
                Our online English classes feature lots of useful learning
                materials and activities to help you improve your understanding
                of grammar in a safe and inclusive learning environment.
                <br />
                Practise using grammar with your classmates in live group
                classes, get grammatical support from a personal tutor in
                one-to-one lessons or practise grammar by yourself at your own
                pace with a self-study course.
              </p>
            </div>

            <div className="w-1/3 hidden lg:block  relative">
              <div className="sticky flex flex-col top-0 gap-3">
                <div className="border-[10px] border-gray-200 p-6 rounded-tr-3xl rounded-bl-3xl flex flex-col items-start gap-3 w-3/4 mx-auto">
                  {sectionItem.map((section) => (
                    <div
                      key={`${section.title}-${section.id}`}
                      className="flex flex-row justify-center items-center gap-x-2"
                    >
                      <svg
                        width="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#23085a"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {' '}
                          <g id="Interface / Check_All">
                            {' '}
                            <path
                              id="Vector"
                              d="M8 12.4854L12.2426 16.728L20.727 8.24268M3 12.4854L7.24264 16.728M15.7279 8.24268L12.5 11.5001"
                              stroke="#23085a"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{' '}
                          </g>{' '}
                        </g>
                      </svg>
                      <NavLink
                        to={`/grammar/${section.to}`}
                        className="text-md text-[#23085a] hover:underline hover:text-green-400"
                      >
                        {section.title}
                      </NavLink>
                    </div>
                  ))}
                </div>
                <div className="border-[10px] border-gray-200 p-6 rounded-tl-3xl rounded-br-3xl flex flex-col items-start gap-3 w-3/4 mx-auto">
                  <p className="text-[#23085a]  text-xl font-bold">
                    Our websites
                  </p>
                  {webItem.map((section) => (
                    <div
                      key={`${section.title}-${section.id}`}
                      className="flex flex-row justify-center items-center gap-x-2"
                    >
                      <svg
                        width="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#23085a"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {' '}
                          <g id="Interface / Check_All">
                            {' '}
                            <path
                              id="Vector"
                              d="M8 12.4854L12.2426 16.728L20.727 8.24268M3 12.4854L7.24264 16.728M15.7279 8.24268L12.5 11.5001"
                              stroke="#23085a"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{' '}
                          </g>{' '}
                        </g>
                      </svg>
                      <NavLink
                        to={section.to}
                        className="text-md text-[#23085a] hover:underline hover:text-green-400"
                      >
                        {section.title}
                      </NavLink>
                    </div>
                  ))}
                </div>
                <div className="border-[10px] border-gray-200 p-6 rounded-tr-3xl rounded-bl-3xl flex flex-col items-start gap-3 w-3/4 mx-auto">
                  <p className="text-[#23085a]  text-xl font-bold">Help</p>
                  {helpItem.map((section) => (
                    <div
                      key={`${section.title}-${section.id}`}
                      className="flex flex-row justify-center items-center gap-x-2"
                    >
                      <svg
                        width="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#23085a"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {' '}
                          <g id="Interface / Check_All">
                            {' '}
                            <path
                              id="Vector"
                              d="M8 12.4854L12.2426 16.728L20.727 8.24268M3 12.4854L7.24264 16.728M15.7279 8.24268L12.5 11.5001"
                              stroke="#23085a"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{' '}
                          </g>{' '}
                        </g>
                      </svg>
                      <NavLink
                        key={section.id}
                        to={section.to}
                        className="text-md text-[#23085a] hover:underline hover:text-green-400"
                      >
                        {section.title}
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SectionPage;
