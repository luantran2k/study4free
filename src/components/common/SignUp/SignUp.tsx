import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../hooks/redux';
import { SignUpInputs } from '../../../interfaces/Auth';
import { useRegisterMutation } from '../../../services/authApi';
import { setUser } from '../../../store/slices/authSlice';
import { NOTIFICATION_TYPE, notify } from '../../../utils/notify';

type SignUpProps = {
  handleChange: (newValue: number) => void;
};
const signUpSchema = Yup.object()
  .shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    email: Yup.string()
      .email('Email must be a valid email')
      .required('Email is required'),
    repassword: Yup.string().required('Password does not match'),
  })
  .required();

const SignUp: React.FC<SignUpProps> = ({ handleChange }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({ resolver: yupResolver(signUpSchema) });

  const [registerUser, { data: registerData, isSuccess: isRegisterSuccess }] =
    useRegisterMutation();
  const handleSignup: SubmitHandler<SignUpInputs> = async (data) => {
    const username = data.username;
    const password = data.password;
    const email = data.email;
    const gender = '';
    await registerUser({ username, password, email, gender });
  };

  useEffect(() => {
    if (isRegisterSuccess) {
      notify(NOTIFICATION_TYPE.SUCCESS, 'Register success');

      dispatch(
        setUser({
          name: registerData?.username,
          token: registerData?.tokens?.accessToken,
          userInfo: {},
        })
      );
      handleChange(0);
    }
  }, [isRegisterSuccess]);
  return (
    <form
      onSubmit={handleSubmit(handleSignup)}
      className="px-16 py-12  border-2 rounded-md shadow-lg bg-red-300"
    >
      <div className="flex flex-col gap-5 mb-6">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2">
            <div className="form-control">
              <label className="label">
                <p className="label-text text-md text-white uppercase">
                  Username
                </p>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input input-bordered w-full"
                  {...register('username')}
                />
              </label>
            </div>
            {errors.username?.message && (
              <p className="mt-2 text-xl italic text-green-600">
                {errors.username?.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <div className="form-control">
              <label className="label">
                <p className="label-text text-md text-white uppercase">
                  E-mail
                </p>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Enter your E-mail"
                  className="input input-bordered w-full"
                  {...register('email')}
                />
              </label>
            </div>
            {errors.email?.message && (
              <p className="mt-2 text-xl italic text-green-600">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 transition-all">
          <div className="w-full md:w-1/2">
            <div className="form-control">
              <label className="label">
                <p className="label-text text-md text-white uppercase">
                  Password
                </p>
              </label>
              <label className="input-group">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="input input-bordered w-full"
                  {...register('password')}
                />
              </label>
            </div>
            {errors.password?.message && (
              <p className="mt-2 text-xl italic text-green-600">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <div className="form-control">
              <label className="label">
                <p className="label-text text-md text-white uppercase">
                  Password Again{' '}
                </p>
              </label>
              <label className="input-group">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered w-full"
                  {...register('repassword')}
                />
              </label>
            </div>
            {errors.repassword?.message && (
              <p className="mt-2 text-xl italic text-green-600">
                {errors.repassword?.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="px-8  transition-colors text-white bg-red-400 hover:bg-red-500 rounded-md hover:shadow-md py-2 text-lg font-semibold"
      >
        Register
      </button>
    </form>
  );
};

export default SignUp;
