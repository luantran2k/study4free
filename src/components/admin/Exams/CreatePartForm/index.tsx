import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../hooks/redux';
import { Skills } from '../../../../interfaces/Exam';
import { CreatePartFormData, createPartSchema } from '../../../../schemas/part';
import { addPart } from '../../../../store/slices/examSlice';
import { hideModal } from '../../../../helper/modal';

type Props = {
  currentSkill: Skills;
  modalId: string;
};

function CreatePartForm(props: Props) {
  const { currentSkill, modalId } = props;
  const dispath = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePartFormData>({
    resolver: yupResolver(createPartSchema),
  });
  const onSubmit = handleSubmit((data) => {
    dispath(addPart({ data, currentSkill }));
    hideModal(modalId);
    reset();
  });
  return (
    <>
      <form
        method="dialog"
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
          <input
            className="input input-bordered"
            {...register('description')}
          />
          <p className="text-error">{errors.description?.message}</p>
        </div>
        <div>
          <label>Type</label>
          <select className="input input-bordered" {...register('type')}>
            <option value="Multiple Choice<">Multiple Choice</option>
            <option disabled value="Information identification">
              Information identification
            </option>
            <option disabled value="Information matching">
              Information matching
            </option>
            <option disabled value="Head Matching">
              Head Matching
            </option>
            <option disabled value="Sentence completion">
              Sentence completion
            </option>
            <option disabled value="Summary completion">
              Summary completion
            </option>
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
    </>
  );
}

export default CreatePartForm;
