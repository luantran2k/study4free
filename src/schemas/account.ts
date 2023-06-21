import * as Yup from 'yup';
import Account from '../interfaces/Account';

export const accountSchema: Yup.ObjectSchema<Account> = Yup.object({
  email: Yup.string()
    .email('Email must be a valid email')
    .required('Username is required'),
  password: Yup.string().required('Password is required'),
});

