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
  return <></>;
};

export default SignUp;
