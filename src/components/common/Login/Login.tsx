import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../hooks/redux';
import { LoginInputs } from '../../../interfaces/Auth';
import { useLoginUserMutation } from '../../../services/authApi';
import { setUser } from '../../../store/slices/authSlice';
import { NOTIFICATION_TYPE, notify } from '../../../utils/notify';

const loginSchema = Yup.object()
  .shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  })
  .required();

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver: yupResolver(loginSchema) });

  const [loginUser, { data: loginData, isSuccess: isLoginSuccess }] =
    useLoginUserMutation();
  const handleLogin: SubmitHandler<LoginInputs> = async (data) => {
    // if (data.username.trim() != '' && data.password!.trim() != '')

    const username = data.username;
    const password = data.password;

    await loginUser({ username, password });
    if (isLoginSuccess) {
      notify(NOTIFICATION_TYPE.SUCCESS, 'Login success');
      navigate('/');
      dispatch(
        setUser({
          name: loginData?.username,
          token: loginData?.tokens?.accessToken,
          userInfo: loginData,
        })
      );
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      notify(NOTIFICATION_TYPE.SUCCESS, 'Login success');
      navigate('/');
      dispatch(
        setUser({
          name: loginData?.username,
          token: loginData?.tokens?.accessToken,
          userInfo: loginData,
        })
      );
    }
  }, [isLoginSuccess]);
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="px-16 py-12  border-2 rounded-md shadow-lg bg-blue-500"
    >
      <div className="flex flex-col gap-5 mb-6">
        <div className="form-control">
          <label className="label">
            <p className="label-text text-md text-white uppercase">Username</p>
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
          <p className="text-xl italic text-pink-300">
            {errors.username?.message}
          </p>
        )}

        <div className="flex flex-col gap-5 mb-6">
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
            <p className="text-xl italic text-pink-300">
              {errors.password?.message}
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="px-8 bg-green-500 hover:bg-green-400 transition-colors text-white rounded-md shadow-md py-2 text-lg font-semibold"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
