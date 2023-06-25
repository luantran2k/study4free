import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { CreatePartFormData, createPartSchema } from '../../../../schemas/part';
import { useCreatePartMutation } from '../../../../store/queries/exams';
import { hideModal } from '../../../../utils/modal';
import { SectionType } from '../Sections';

type Props = {
  section: SectionType;
  modalId: string;
  sectionId: string;
};

function CreatePartForm(props: Props) {
  const { section, modalId, sectionId } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePartFormData>({
    resolver: yupResolver(createPartSchema),
  });
  const [createPart, { isLoading }] = useCreatePartMutation();

  const onSubmit = handleSubmit((data) => {
    createPart({ section, sectionId, data });
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
          <label htmlFor="file-input">Image</label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="file-input">Audio</label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>

        <button
          className="btn bg-blue-500 hover:bg-blue-500 text-white "
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            'Create'
          )}
        </button>
      </form>
    </>
  );
}

export default CreatePartForm;
