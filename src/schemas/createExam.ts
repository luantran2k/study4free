import * as Yup from 'yup';
import { CreateExamFormData, Skills, skills } from '../interfaces/Exam';

export const createExamSchema: Yup.ObjectSchema<CreateExamFormData> =
  Yup.object({
    title: Yup.string()
      .typeError('Please enter a title. The field cannot be left blank.')
      .required('Title is required'),
    description: Yup.string()
      .typeError('Please enter a description. The field cannot be left blank.')
      .required('Description is required'),
    duration: Yup.number()
      .typeError('Duration must be a number.')
      .min(10, 'Duration must be at least 10 minutes.')
      .positive('Must be a positive number.')
      .required('Duration is required'),

    type: Yup.string()
      .typeError('Please select a  type. The field cannot be left blank.')
      .required('Type is required'),
    isNeedPaid: Yup.boolean().required(),
    sections: Yup.array()
      .of(Yup.mixed<Skills>().oneOf(skills).required())
      .required()
      .min(1, 'Please select at least one skill'),
  });
