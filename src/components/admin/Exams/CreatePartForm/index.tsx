import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormData = {
  title: string;
  type: string;
  numberOfQuestions: number;
  totalPoint: number;
};

const schema = yup.object({
  title: yup.string().min(2).required(),
  type: yup.string().required(),
  numberOfQuestions: yup.number().required(),
  totalPoint: yup.number().required(),
});

function CreatePartForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    reValidateMode: 'onBlur',
  });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-2"
    >
      <h2 className="text-xl">Create part</h2>
      <div>
        <label>Title</label>
        <input className="input input-bordered" {...register('title')} />
        <p>{errors.title?.message}</p>
      </div>
      <div>
        <label>Type</label>
        <select className="input input-bordered" {...register('type')}>
          <option value="Multiple Choice<">Multiple Choice</option>
          <option value="Information identification">
            Information identification
          </option>
          <option value="Information matching">Information matching</option>
          <option value="Head Matching">Head Matching</option>
          <option value="Sentence completion">Sentence completion</option>
          <option value="Summary completion">Summary completion</option>
        </select>
      </div>
      <div>
        <label>Number of Questions</label>
        <input
          className="input input-bordered"
          {...register('numberOfQuestions')}
        />
      </div>
      <div>
        <label>Total Point</label>
        <input className="input input-bordered" {...register('totalPoint')} />
      </div>
    </form>
  );
}

export default CreatePartForm;
