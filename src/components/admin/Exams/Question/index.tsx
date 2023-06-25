import { useEffect, useState } from 'react';
import IQuestion from '../../../../interfaces/Question';
import {
  useGetQuestionByIdQuery,
  useUpdateQuestionByIdMutation,
} from '../../../../store/queries/exams';
import { SectionType } from '../Sections';

type Props = {
  section: SectionType;
  questionId: string;
};

function Question({ questionId, section }: Props) {
  const { data, isLoading, isError } = useGetQuestionByIdQuery({
    questionId,
    section,
  });

  const [question, setQuestion] = useState<IQuestion>();
  const [updateQuestionById] = useUpdateQuestionByIdMutation();
  useEffect(() => {
    if (data) {
      setQuestion(data);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p className="text-error">Error</p>;
  }

  return (
    <form className=" my-4 flex flex-col gap-2 [&>div]:flex [&>div]:flex-col [&>div]:gap-2">
      <div>
        <label htmlFor="">Title</label>
        <input
          value={question?.title}
          type="text"
          className="input input-bordered"
        />
      </div>
      <div>
        <label htmlFor="">Description</label>
        <input type="text" className="input input-bordered" />
      </div>

      <div>
        <label htmlFor="">Audio</label>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </div>
      <div>
        <label htmlFor="">Image</label>
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </div>
    </form>
  );
}

export default Question;
