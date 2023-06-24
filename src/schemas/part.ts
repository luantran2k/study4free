import * as Yup from 'yup';
import IPart from '../interfaces/Part';
export type CreatePartFormData = Pick<
  IPart,
  'title' | 'description' | 'type' | 'audio' | 'image'
>;
export const createPartSchema: Yup.ObjectSchema<CreatePartFormData> =
  Yup.object({
    title: Yup.string()
      .min(5, 'Title must be at least 5 characters')
      .required('Title points is required'),
    description: Yup.string().required('Description is required'),
    type: Yup.string().required(),
    audio: Yup.string().optional(),
    image: Yup.string().optional(),
  });
