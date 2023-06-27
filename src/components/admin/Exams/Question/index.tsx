import { useAutoAnimate } from '@formkit/auto-animate/react';
import {
  Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import AddIcon from '../../../../assets/icons/Add';
import { useAppDispatch } from '../../../../hooks/redux';
import IQuestion from '../../../../interfaces/Question';
import {
  useCreateAnswerMutation,
  useGetQuestionByIdQuery,
  useUpdateQuestionByIdMutation,
} from '../../../../store/queries/exams';
import { updateExamEditInfo } from '../../../../store/slices/examSlice';
import TextEditor from '../../../common/TextEditor';
import Answer from '../Answer';
import AudioUploadPreview from '../AudioUploadPreview';
import ImageUploadPreview from '../ImageUploadPreview';
import { SectionType } from '../Sections';

type Props = {
  section: SectionType;
  questionId: string;
};

function Question(
  { questionId, section }: Props,
  ref: Ref<{ currentQuestion?: IQuestion }>
) {
  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionByIdQuery({
    questionId,
    section,
  });
  const dispatch = useAppDispatch();
  useImperativeHandle(ref, () => ({
    currentQuestion: question,
  }));

  const [updateTitle] = useUpdateQuestionByIdMutation();
  const [updateImage, { isLoading: isImageLoading, isError: isImageError }] =
    useUpdateQuestionByIdMutation();
  const [updateAudio, { isLoading: isAudioLoading, isError: isAudioError }] =
    useUpdateQuestionByIdMutation();
  const [createAnswer] = useCreateAnswerMutation();
  const [parent] = useAutoAnimate();

  useEffect(() => {
    if (question) {
      dispatch(
        updateExamEditInfo({
          questionId: question.id,
        })
      );
    }
  }, [question]);

  if (isLoading) {
    return <span className="loading loading-dots"></span>;
  }
  if (isError) {
    return <p className="text-error">Error</p>;
  }

  if (!question) return <p>Invalid question</p>;

  return (
    <div className="flex gap-6">
      <div className="w-5/12 flex flex-col [&>div]:flex [&>div]:flex-col [&>div]:gap-2 gap-4">
        <div className="mb-12">
          <label htmlFor="">Title</label>
          <TextEditor
            defaultValue={question?.title || ''}
            onBlur={(value) => {
              updateTitle({
                questionId,
                section,
                data: { title: value },
              });
            }}
          />
        </div>

        <div className="mb-12">
          <label htmlFor="">Description</label>
          <TextEditor
            defaultValue={question?.description || ''}
            onBlur={(value) => {
              updateTitle({
                questionId,
                section,
                data: { description: value },
              });
            }}
          />
        </div>

        {section === 'Listening' && (
          <div>
            <label htmlFor="">Audio</label>
            <AudioUploadPreview
              isAudioLoading={isAudioLoading}
              isAudioError={isAudioError}
              audioUrl={
                typeof question?.audio === 'string' ? question.audio : undefined
              }
              onChange={(e) => {
                updateAudio({
                  questionId,
                  section,
                  data: { audio: e.target.files?.[0] },
                });
              }}
              onDelete={() => {
                updateAudio({
                  questionId,
                  section,
                  data: { audio: '' },
                });
              }}
            />
          </div>
        )}

        <div>
          <label htmlFor="">Image</label>
          <ImageUploadPreview
            isImageLoading={isImageLoading}
            isImageError={isImageError}
            imageUrl={
              typeof question?.image === 'string' ? question?.image : undefined
            }
            onChange={(e) => {
              updateImage({
                questionId,
                section,
                data: { image: e.target.files?.[0] },
              });
            }}
            onDelete={() => {
              updateImage({
                questionId,
                section,
                data: { image: '' },
              });
            }}
          />
        </div>
      </div>
      <div className="border-r-2"></div>
      <div className="w-7/12">
        {section === 'Speaking' || section === 'Writing' ? (
          <p>You don't need to provide answer for this question</p>
        ) : (
          <>
            <div className="flex gap-4 items-center mb-4">
              <h5 className="font-medium text-xl ">Answer</h5>
              {question.id && (
                <button
                  className="active:translate-y-1 transition-all cursor-pointer bg-blue-500 text-white w-8 h-8 rounded-box flex justify-center items-center"
                  onClick={() =>
                    createAnswer({ questionId: question.id as string, section })
                  }
                >
                  <AddIcon />
                </button>
              )}
            </div>
            <ul ref={parent} className="list-none flex flex-col gap-3">
              {question.answers?.map((answer, index) => (
                <Answer
                  index={index}
                  key={answer.id}
                  {...answer}
                  answers={question?.answers || []}
                  section={section}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default forwardRef(Question);
