import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Login from '../../components/common/Login/Login';
import SignUp from '../../components/common/SignUp/SignUp';

type Inputs = {
  username: string;
  password: string;
  email?: string;
  repassword?: string;
};

const Authentication = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (newValue: number) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <div className="w-full flex flex-row h-full">
      <div className="w-[40vw] flex flex-col items-start h-full">
        <div className="tabs mx-8 mt-8">
          <a
            className={`tab tab-lifted ${
              value === 0 && 'tab-active text-xl font-semibold'
            } text-md`}
            onClick={() => handleChange(0)}
          >
            Login
          </a>
          <a
            className={`tab tab-lifted ${
              value === 1 && 'tab-active text-xl font-semibold'
            } text-md`}
            onClick={() => handleChange(1)}
          >
            Sign up
          </a>
        </div>
        <div className="w-full m-8">
          {value === 0 && <Login />}
          {value === 1 && <SignUp />}
        </div>
      </div>
      <div className="w-[60vw]"></div>
    </div>
  );
};

export default Authentication;
