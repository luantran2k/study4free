import { SubmitHandler, useForm } from 'react-hook-form';
import CustomInput from '../CustomInput/CustomInput';

interface LoginInputs {
  username: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputs>();
  const handleLogin: SubmitHandler<LoginInputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="px-5 py-12  border-2 rounded-md shadow-lg bg-blue-300"
    >
      <div className="flex flex-col gap-5 mb-6">
        <CustomInput label="Username" placeholder="Enter Username"  {...register('username')}/>
      </div>
      {/* <Box className="flex flex-col gap-5 mb-6">
        <TextField
          id="username"
          label="Username"
          variant="filled"
          {...register('username')}
          sx={{
            bgcolor: 'white',
            borderRadius: '4px',
            '& .Mui-focused': {
              color: 'black',
            },
          }}
        />
        {errors.username && <span>Username is required</span>}

        <TextField
          id="password"
          label="Password"
          variant="filled"
          {...register('password')}
          sx={{ bgcolor: 'white', borderRadius: '4px' }}
        />
        {errors.password && <span>Password is required</span>}
      </Box>

      <Button type="submit" variant="contained" color="primary" sx={{ px: 4 }}>
        Login
      </Button> */}
    </form>
  );
};

export default Login;
