import { useGetPartByIdQuery } from '../../../../store/queries/exams';
import Questions from '../Questions';
import { SectionType } from '../Sections';

type Props = {
  section: SectionType;
  partId: string;
};

function Part({ partId, section }: Props) {
  const {
    data: part,
    isLoading,
    isError,
  } = useGetPartByIdQuery({ partId: partId, section });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p className="text-error">Error</p>;
  }

  return (
    <div className="my-4">
      <h3 className="text-2xl">{part?.title}</h3>
      <p>{part?.description}</p>
      <div className="flex gap-2 my-4">
        <button className="btn bg-blue-500 hover:bg-blue-500 text-white btn-sm">
          Add Question
        </button>
        <button className="btn  bg-red-500 hover:bg-red-500 text-white btn-sm">
          Remove Question
        </button>
      </div>
      <Questions
        section={section}
        questionIds={part?.questions.map((question) => question.id) || []}
        partId={partId}
      />
    </div>
  );
}

export default Part;
