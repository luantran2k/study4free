import { useAutoAnimate } from '@formkit/auto-animate/react';
import {
  useCreateQuestionMutation,
  useGetPartByIdQuery,
  useUpdatePartMutation,
} from '../../../../store/queries/exams';
import Questions from '../Questions';
import { SectionType } from '../Sections';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../../hooks/redux';
import { updateExamEditInfo } from '../../../../store/slices/examSlice';
import AudioUploadPreview from '../AudioUploadPreview';

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
  const dispatch = useAppDispatch();
  const [
    updatePart,
    { isLoading: isUpdatePartLoading, isError: isUpdatePartError },
  ] = useUpdatePartMutation();

  useEffect(() => {
    if (part?.id) {
      dispatch(
        updateExamEditInfo({
          partId: part.id,
          partType: part.type,
        })
      );
    }
  }, [part]);

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
      {section === 'Listening' && (
        <div className="max-w-sm my-4">
          <AudioUploadPreview
            isAudioLoading={isUpdatePartLoading}
            isAudioError={isUpdatePartError}
            audioUrl={part?.audio}
            onChange={(e) => {
              updatePart({
                partId: part?.id as string,
                section,
                data: { audio: e.target.files?.[0] as File },
              });
            }}
            onDelete={() => {
              updatePart({
                partId: part?.id as string,
                section,
                data: { audio: '' },
              });
            }}
          />
        </div>
      )}
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
