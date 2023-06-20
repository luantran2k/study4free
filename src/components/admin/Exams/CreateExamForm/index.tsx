import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/redux';
import { CreateExamFormData } from '../../../../interfaces/Exam';
import { createExamschema } from '../../../../schemas/createExam';
import { setExamInfo } from '../../../../store/slices/examSlice';

function CreateExamForm() {
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateExamFormData>({
    resolver: yupResolver(createExamschema),
  });

  const onSubmit = handleSubmit((data) => {
    dispath(setExamInfo(data));

    navigate('/admin/exams/create');
  });
  return (
    <form
      onSubmit={onSubmit}
      className="[&_label]:font-medium [&_input]:input [&_input]:input-bordered [&_input]:w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-2 [&>div]:mb-4"
    >
      <div>
        <label htmlFor="">Title</label>
        <input type="text" {...register('title')} />
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
        <label htmlFor="">Duration</label>
        <input type="number" {...register('duration')} />
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
      <div>
        <label htmlFor="">Sections</label>
        <select {...register('sections')} multiple>
          <option value="Listening">Listening</option>
          <option value="Reading">Reading</option>
          <option value="Writing">Writing</option>
          <option value="Speaking">Speaking</option>
        </select>
        <p className="text-error">{errors.sections?.message}</p>
      </div>
      <div>
        <label htmlFor="">Price</label>
        <input type="number" {...register('price')} />
        <p className="text-error">{errors.price?.message}</p>
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
}

export default CreateExamForm;
