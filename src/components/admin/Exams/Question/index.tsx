import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useEffect, useState } from 'react';
import AddIcon from '../../../../assets/icons/Add';
import IQuestion from '../../../../interfaces/Question';
import {
  useCreateAnswerMutation,
  useGetQuestionByIdQuery,
  useUpdateQuestionByIdMutation,
} from '../../../../store/queries/exams';
import Answers from '../Answer';
import { SectionType } from '../Sections';
import ImageUploadPreview from '../ImageUploadPreview';

type Props = {
  section: SectionType;
  questionId: string;
};

function Question({ questionId, section }: Props) {
  const { data, isLoading, isError } = useGetQuestionByIdQuery({
    questionId,
    section,
  });

  const [question, setQuestion] = useState<Partial<IQuestion>>({ title: '' });
  const [updateTitle] = useUpdateQuestionByIdMutation();
  // const [updateAudio] = useUpdateQuestionByIdMutation();
  const [updateImage, { isLoading: isImageLoading, isError: isImageError }] =
    useUpdateQuestionByIdMutation();

  const [createAnswer] = useCreateAnswerMutation();
  const [parent] = useAutoAnimate();

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
    <div className="flex gap-6">
      <div className="w-5/12 flex flex-col [&>div]:flex [&>div]:flex-col [&>div]:gap-2 gap-4">
        <div>
          <label htmlFor="">Title</label>
          <input
            value={question?.title}
            type="text"
            className="input input-bordered"
            onChange={(e) => {
              setQuestion((question) => ({
                ...question,
                title: e.target.value,
              }));
            }}
            onBlur={(e) => {
              updateTitle({
                questionId,
                section,
                data: { title: e.target.value },
              });
            }}
          />
        </div>
        {section === 'Listening' && (
          <div>
            <label htmlFor="">Audio</label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              accept="audio/*"
              // onChange={(e) => setAudio(e.target.files?.[0])}
            />
          </div>
        )}

        <div>
          <label htmlFor="">Image</label>
          {/* {isImageLoading ? (
            <p>Loading...</p>
          ) : typeof question?.image === 'string' ? (
            <img src={question.image} alt="" />
          ) : (
            <>
              {isImageError && <p>Error</p>}
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                accept="image/*"
                onChange={(e) => {
                  setImage(e.target.files?.[0]);
                  updateImage({
                    questionId,
                    section,
                    data: { image: e.target.files?.[0] },
                  });
                }}
              />
            </>
          )} */}
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
                <Answers
                  index={index}
                  key={answer.id}
                  answer={answer}
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

export default Question;
