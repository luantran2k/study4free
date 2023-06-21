import * as Yup from 'yup';
import IPart from '../interfaces/Part';
export type CreatePartFormData = Pick<
  IPart,
  'title' | 'description' | 'type' | 'totalPoints'
>;
export const createPartSchema: Yup.ObjectSchema<CreatePartFormData> =
  Yup.object({
    title: Yup.string()
      .min(5, 'Title must be at least 5 characters')
      .required('Title points is required'),
    description: Yup.string().required('Description is required'),
    type: Yup.string().required(),
    totalPoints: Yup.number()
      .typeError('Please enter a total points. The field cannot be left blank.')
      .positive('Must be a positive number.')
      .required('Total points is required'),
  });
