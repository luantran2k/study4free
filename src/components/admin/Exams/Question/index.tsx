import { useGetQuestionByIdQuery } from '../../../../store/queries/exams';
import { SectionType } from '../Sections';

type Props = {
  section: SectionType;
  questionId: string;
};

function Question({ questionId, section }: Props) {
  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionByIdQuery({
    questionId,
    section,
  });

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
        <input type="text" className="input input-bordered" />
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
