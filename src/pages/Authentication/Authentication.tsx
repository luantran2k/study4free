import React, { lazy } from 'react';
const Login = lazy(() => import('../../components/common/Login/Login'));
const SignUp = lazy(() => import('../../components/common/SignUp/SignUp'));
import loginBg from '../../assets/images/bg-login.jpg';

const Authentication = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row h-screen relative transition-all">
      <div className={`flex flex-col items-start gap-5 h-screen ${value === 0 ? 'bg-right-top' : 'bg-left-bottom'}`} style={{
        backgroundImage: `url(${loginBg})`
      }}>
        <div className=" m-auto w-[80vw] mx-auto lg:mx-8 lg:w-auto">
          <div className="tabs mx-8 mt-8">
            <a
              className={`tab tab-lifted tab-lg  ${value === 0 ? 'tab-active text-2xl font-bold text-sky-500' : "text-white"
                } text-lg  `}
              onClick={() => handleChange(0)}
            >
              Login
            </a>
            <a
              className={`tab tab-lifted ${value === 1 && 'tab-active tab-lg text-2xl font-bold'
                } text-lg text-red-400`}
              onClick={() => handleChange(1)}
            >
              Sign up
            </a>
          </div>
          <div className="lg:w-[40vw] w-[80vw] mx-auto lg:mx-0 transition-all">
            {value === 0 && <Login />}
            {value === 1 && <SignUp handleChange={handleChange} />}
          </div>
        </div>
      </div>
      <div
        className={`lg:w-[60vw] w-full h-screen absolute lg:static top-0 left-0 right-0 bottom-0 z-[-1] bg-no-repeat flex justify-center items-center  ${value === 0 ? 'lg:bg-left-top' : 'lg:bg-top'}`}
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <h3 className="text-center italic font-serif text-5xl hidden lg:block text-white">
          {value === 0 ? 'Welcome Back ' : 'Please register me'}
        </h3>
      </div>
    </div>
  );
};

export default Authentication;
