import { SubmitHandler, useForm } from 'react-hook-form';

interface SignUpInputs {
  username: string;
  password: string;
  email: string;
  repassword: string;
}
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInputs>();
  const handleSignup: SubmitHandler<SignUpInputs> = (data) => console.log(data);
  return <form
    onSubmit={handleSubmit(handleSignup)}
    className="px-16 py-12  border-2 rounded-md shadow-lg bg-red-300"
  >
    <div className="flex flex-col gap-5 mb-6">
      <div className='flex flex-row gap-5'>
        <div className='w-1/2'>
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
          {errors.username && <span>Username is required</span>}
        </div>
        <div className='w-1/2'>
          <div className="form-control">
            <label className="label">
              <p className="label-text text-md text-white uppercase">E-mail</p>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter your E-mail"
                className="input input-bordered w-full"
                {...register("email")}
              />
            </label>
          </div>
          {errors.email && <span>Email is required</span>}
        </div>
      </div>

      <div className='flex flex-row gap-5'>
        <div className='w-1/2'>
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
          {errors.password && <span>Password is required</span>}
        </div>
        <div className='w-1/2'>
          <div className="form-control">
            <label className="label">
              <p className="label-text text-md text-white uppercase">Password Again </p>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Confirm password"
                className="input input-bordered w-full"
                {...register("repassword")}
              />
            </label>
          </div>
          {errors.repassword && <span>Password doesn not match!!!</span>}
        </div>
      </div>

    </div>
    <button type='submit' className='px-8  transition-colors text-white bg-transparent hover:bg-red-500 rounded-md hover:shadow-md py-2 text-lg font-semibold'>Register</button>

  </form>
};

export default SignUp;
