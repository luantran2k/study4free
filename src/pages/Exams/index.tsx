import { Outlet, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ChatIcon from '../../assets/icons/Chat';
import ClockIcon from '../../assets/icons/Clock';
import WriteIcon from '../../assets/icons/Write';
import React from 'react';
function ExamsPage() {
  const location = useParams();
  return (
    <React.Fragment>
      {location.pathname ? (
        <Outlet />
      ) : (
        <div className="flex flex-col h-full relative ">
          <div className="bg-transparent container mx-auto">
            <h3 className="text-4xl text-black font-bold my-8">
              Exam Libraries
            </h3>
            <div className="flex flex-row items-center gap-3 mb-8">
              <input
                type="text"
                placeholder="Input keyword you want to search"
                className="input input-bordered w-full max-w-xs"
              />
              <button className="btn bg-blue-400 text-white hover:bg-blue-500">
                Search
              </button>
            </div>
          </div>
          <div className="flex-grow-[1] container mx-auto">
            <div className="mb-8">
              <div className="tabs ">
                <a
                  className="tab tab-lifted tab-lg tab-active text-xl font-semibold text-[#23085a] bg-[#e8f2ff]"
                  style={{ backgroundColor: '#e8f2ff' }}
                >
                  IELTS C18 Full Test 1
                </a>
              </div>
              <div className="grid grid-cols-4 gap-4 bg-[#e8f2ff]">
                <NavLink
                  to=""
                  className="bg-white rounded-2xl hover:shadow-xl shadow-md w-full m-2 hover:-translate-y-2 transition-all p-4 mt-4"
                >
                  <h6 className="text-black font-semibold text-xl mb-3">
                    C18 IELTS listening test 1
                  </h6>
                  <p className="text-gray-400 text-lg mb-2 font-semibold">
                    Exam package: IELTS C18 Full Test 1
                  </p>
                  <div className="flex flex-row flex-wrap mb-2 font-medium">
                    <div className="flex flex-row items-center gap-2 border-r-2 border-r-gray-400 px-2">
                      <span className="text-gray-400">
                        <ClockIcon />
                      </span>
                      <p className="text-gray-400">40 minutes</p>
                    </div>
                    <div className="flex flex-row items-center gap-2 border-r-2 border-r-gray-400 px-2">
                      <span className="text-gray-400">
                        <WriteIcon />
                      </span>
                      <p className="text-gray-400">45009</p>
                    </div>
                    <div className="flex flex-row items-center gap-2  px-2">
                      <span className="text-white">
                        <ChatIcon />
                      </span>
                      <p className="text-gray-400">261</p>
                    </div>
                  </div>
                  <div className="flex flex-row flex-wrap mb-2 font-medium">
                    <div className="flex w-1/3 flex-row items-center gap-2 border-r-2 border-r-gray-400 px-2">
                      <p className="text-gray-400">4 parts</p>
                    </div>
                    <div className="flex w-2/3 flex-row items-center gap-2 px-2">
                      <p className="text-gray-400">40 questions</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 flex-wrap mb-8">
                    <NavLink
                      to=""
                      className="text-blue-500 w-fit rounded-xl p-2 bg-blue-100 text-sm "
                    >
                      #IELTS Academic
                    </NavLink>
                    <NavLink
                      to=""
                      className="text-blue-500  w-fit rounded-xl p-2 bg-blue-100 text-sm "
                    >
                      #Listening
                    </NavLink>
                  </div>
                  <button className="text-blue-400 text-xl w-full rounded-xl py-2 border-2 border-blue-400 bg-white hover:bg-blue-400 hover:text-white transition-all">
                    Details
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ExamsPage;
