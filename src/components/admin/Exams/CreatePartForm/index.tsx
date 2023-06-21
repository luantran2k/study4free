import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { CreatePartFormData, createPartSchema } from '../../../../schemas/part';

function CreatePartForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePartFormData>({
    resolver: yupResolver(createPartSchema),
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
        <p className="text-error">{errors.title?.message}</p>
      </div>
      <div>
        <label>Description</label>
        <input className="input input-bordered" {...register('description')} />
        <p className="text-error">{errors.description?.message}</p>
      </div>
      <div>
        <label>Duration</label>
        <input
          type="number"
          className="input input-bordered"
          {...register('duration')}
        />
        <p className="text-error">{errors.duration?.message}</p>
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
        <p className="text-error">{errors.type?.message}</p>
      </div>

      <div>
        <label>Total Point</label>
        <input
          type="number"
          className="input input-bordered"
          {...register('totalPoints')}
        />
        <p className="text-error">{errors.totalPoints?.message}</p>
      </div>
      <button className="btn btn-primary">Create</button>
    </form>
  );
}

export default CreatePartForm;
