import { useAutoAnimate } from '@formkit/auto-animate/react';
import {
  useCreateQuestionMutation,
  useGetPartByIdQuery,
} from '../../../../store/queries/exams';
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

  const [createQuestion] = useCreateQuestionMutation();
  const [parent] = useAutoAnimate();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p className="text-error">Error</p>;
  }

  return (
    <div className="my-4" ref={parent}>
      <h3 className="text-2xl">{part?.title}</h3>
      <p>{part?.description}</p>
      {part?.questions && part.questions.length > 0 ? (
        <Questions
          section={section}
          questionIds={part?.questions.map((question) => question.id) || []}
          partId={partId}
        />
      ) : (
        <div className="flex gap-2 my-4">
          <button
            className="btn bg-blue-500 hover:bg-blue-500 text-white btn-sm"
            onClick={() => createQuestion({ partId, section })}
          >
            Add Question
          </button>
        </div>
      )}
    </div>
  );
}

export default Part;
