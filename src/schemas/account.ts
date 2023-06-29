import * as Yup from 'yup';
import Account from '../interfaces/Account';

export const accountSchema: Yup.ObjectSchema<Account> = Yup.object({
  email: Yup.string()
    .email('Email must be a valid email')
    .required('Username is required'),
  password: Yup.string().required('Password is required'),
});


export const loginSchema = Yup.object()
  .shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  })
  .required();


export const signUpSchema = Yup.object()
  .shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    email: Yup.string()
      .email('Email must be a valid email')
      .required('Email is required'),
    repassword: Yup.string().required('Password does not match'),
  })
  .required();