import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

interface LoginInputs {
  username: string;
  password: string;
}


const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
}).required();

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>(
    { resolver: yupResolver(loginSchema) }
  );
  const handleLogin: SubmitHandler<LoginInputs> = (data) => console.log(data);



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
              {...register("username")}
            />
          </label>
        </div>
        {errors.username?.message && <p className='text-xl italic text-pink-300'>{errors.username?.message}</p>}

        <div className="flex flex-col gap-5 mb-6">
          <div className="form-control">
            <label className="label">
              <p className="label-text text-md text-white uppercase">Password</p>
            </label>
            <label className="input-group">
              <input
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full"
                {...register("password")}
              />
            </label>
          </div>
          {errors.password?.message && <p className='text-xl italic text-pink-300'>{errors.password?.message}</p>}
        </div>
      </div>
      <button type='submit' className='px-8 bg-green-500 hover:bg-green-400 transition-colors text-white rounded-md shadow-md py-2 text-lg font-semibold'>Login</button>

    </form>
  );
};

export default Login;
