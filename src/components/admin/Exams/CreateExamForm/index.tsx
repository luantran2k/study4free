import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CreateExamFormData } from '../../../../interfaces/Exam';
import { createExamSchema } from '../../../../schemas/createExam';
import { useCreateExamMutation } from '../../../../store/queries/exams';
import { NOTIFICATION_TYPE, notify } from '../../../../utils/notify';
import LoadingButton from '../../../common/LoadingButton';
import { hideModal } from '../../../../utils/modal';
import { useEffect } from 'react';

function CreateExamForm({ modalId }: { modalId: string }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateExamFormData>({
    resolver: yupResolver(createExamSchema),
    defaultValues: {
      isNeedPaid: false,
    },
  });

  const [createExam, { isLoading }] = useCreateExamMutation();

  const onSubmit = handleSubmit((data) => {
    createExam(data)
      .unwrap()
      .then((newExam) => navigate(`/admin/exams/edit/${newExam.id}`))
      .catch((e) => {
        notify(NOTIFICATION_TYPE.ERROR, e.data.message, {
          position: 'top-right',
        });
        hideModal(modalId);
      });
  });

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="[&_label]:font-medium [&_input:not(type='checkbox')]:input [&_input:not(type='checkbox')]:input-bordered [&_input:not(type='checkbox')]:w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-2 [&>div]:mb-4"
      >
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            {...register('title')}
            className="input input-bordered"
          />
          <p className="text-error">{errors.title?.message}</p>
        </div>

        <div>
          <label htmlFor="">Description</label>
          <textarea
            className="textarea textarea-bordered"
            rows={2}
            {...register('description')}
          />
          <p className="text-error">{errors.description?.message}</p>
        </div>
        <div>
          <label htmlFor="">Duration (Minutes)</label>
          <input
            className="input input-bordered"
            type="number"
            {...register('duration')}
          />
          <p className="text-error">{errors.duration?.message}</p>
        </div>
        <div>
          <label htmlFor="">Type</label>
          <select {...register('type')}>
            <option value="IELTS">IELTS</option>
            <option value="TOEIC">TOEIC</option>
            <option value="TOEFL">TOEFL</option>
            <option value="CEFR">CEFR</option>
          </select>
          <p className="text-error">{errors.type?.message}</p>
        </div>
        <div className="[&_div_label]:font-normal">
          <label htmlFor="">Sections</label>
          {/* <select
            className="input input-bordered h-20"
            {...register('sections')}
            multiple
          >
            <option value="Listening">Listening</option>
            <option value="Reading">Reading</option>
            <option value="Writing">Writing</option>
            <option value="Speaking">Speaking</option>
          </select> */}
          <div className="flex gap-2">
            <div className="flex gap-2 items-center">
              <label htmlFor="Listening">Listening</label>
              <input
                {...register('sections')}
                type="checkbox"
                className="checkbox"
                name="sections"
                value="Listening"
                id="Listening"
              />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="Reading">Reading</label>
              <input
                {...register('sections')}
                type="checkbox"
                className="checkbox"
                name="sections"
                id="Reading"
                value="Reading"
              />
            </div>

            <div className="flex gap-2 items-center">
              <label htmlFor="Speaking">Speaking</label>
              <input
                {...register('sections')}
                type="checkbox"
                className="checkbox"
                name="sections"
                id="Speaking"
                value="Speaking"
              />
            </div>

            <div className="flex gap-2 items-center">
              <label htmlFor="Writing">Writing</label>
              <input
                {...register('sections')}
                type="checkbox"
                className="checkbox"
                name="sections"
                id="Writing"
                value="Writing"
              />
            </div>
          </div>
          <p className="text-error">{errors.sections?.message}</p>
        </div>
        <div>
          <label htmlFor="">Paid</label>
          <select
            className="select select-bordered"
            {...register('isNeedPaid')}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <p className="text-error">{errors.isNeedPaid?.message}</p>
        </div>
        <LoadingButton
          type="submit"
          className="btn bg-blue-500 hover:bg-blue-500 text-white  w-full"
          isLoading={isLoading}
        >
          Create
        </LoadingButton>
      </form>
    </>
  );
}

export default CreateExamForm;
