import React from 'react';
import Login from '../../components/common/Login/Login';
import SignUp from '../../components/common/SignUp/SignUp';
import loginBg from "../../assets/images/bg-login.jpg"

const Authentication = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (newValue: number) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <div className="w-full flex flex-col lg:flex-row h-screen relative transition-all">
      <div className="flex flex-col items-start gap-5 h-screen">
        <div className=" m-auto md:mx-8 md:w-auto">

          <div className="tabs mx-8 mt-8">
            <a
              className={`tab tab-lifted ${value === 0 && 'tab-active text-xl font-semibold text-blue-400'
                } text-md`}
              onClick={() => handleChange(0)}
            >
              Login
            </a>
            <a
              className={`tab tab-lifted ${value === 1 && 'tab-active text-xl font-semibold text-red-400'
                } text-md`}
              onClick={() => handleChange(1)}
            >
              Sign up
            </a>
          </div>
          <div className='md:w-[40vw]'>
            {value === 0 && <Login />}
            {value === 1 && <SignUp />}
          </div>

        </div>
      </div>
      <div className="lg:w-[60vw] w-full h-screen absolute lg:static top-0 left-0 right-0 bottom-0 z-[-1] bg-no-repeat lg:bg-top flex justify-center items-center" style={{ backgroundImage: `url(${loginBg})` }}>
        <h3 className='text-center italic font-serif text-5xl hidden lg:block text-white'>Welcome Back</h3>
      </div>
    </div>
  );
};

export default Authentication;
