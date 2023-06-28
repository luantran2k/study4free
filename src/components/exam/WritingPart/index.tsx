import { useParams } from 'react-router-dom';
import NoteInfo from '../../../pages/Exams/commonComponent/noteInfo';
import {
  useGetPartByIdQuery,
  useGetPartIdsBySectionIdQuery,
} from '../../../store/queries/exams';
import { ChangeEvent, useState } from 'react';
import LoadingAnimate from '../../common/LoadingAnimate';
import ReactQuill from 'react-quill';

function WritingPart() {
  const { sectionId = '', partId = '' } = useParams();
  const { data: sectionData } = useGetPartIdsBySectionIdQuery({
    section: 'Writing',
    sectionId,
  });
  const [essay, setEssay] = useState<string[]>([]);

  const {
    data: part,
    isError,
    isLoading,
  } = useGetPartByIdQuery({
    section: 'Writing',
    partId: partId,
  });

  const partIndex =
    sectionData?.parts?.findIndex((item) => item.id === partId) || 0;
  const handleWritingEssay = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const updatedArr = [...(essay || [])];
    updatedArr[partIndex] = e.target.value;
    setEssay(updatedArr);
  };

  const getNumberOfWord = (paragraph: string) => {
    return paragraph
      .trim()
      .split(/\s+/)
      .filter((item: string) => item !== '').length;
  };

  if (isLoading) {
    return <LoadingAnimate />;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-12 bg-[] bg-[#fff] rounded-xl shadow-2xl py-[2rem]">
      <div className="xl:col-span-7 col-span-12 px-[1rem] bg-[#f8f9fa]">
        <p className="tex-[1rem] font-bold uppercase my-[1rem]">
          {part?.description}
        </p>
        <p className="text-[red] font-bold italic">
          Note : You should spend about {partIndex === 0 ? '20' : '40'} minutes
          on this task. Write about the following topic:
        </p>
        <div className="font-bold my-[1.5rem]">
          <ReactQuill
            value={part?.questions[0].title || ''}
            readOnly={true}
            theme="bubble"
          />
        </div>

        {part?.questions[0]?.image && (
          <img
            src={
              typeof part?.questions[0]?.image === 'string'
                ? part?.questions[0]?.image
                : URL.createObjectURL(part?.questions[0]?.image)
            }
            alt=""
          />
        )}
      </div>
      <div className="xl:col-span-5 col-span-12 flex flex-col p-[1rem]">
        <NoteInfo index={partIndex} />
        <div className="my-[1rem]">
          <textarea
            className="border-2 rounded-lg p-[1rem]"
            placeholder="Write your essay here"
            name=""
            id=""
            value={
              essay.length && essay[partIndex] !== undefined
                ? essay[partIndex]
                : ''
            }
            onChange={handleWritingEssay}
            cols={36}
            rows={12}
          ></textarea>
          <p>Word count : {getNumberOfWord(essay[partIndex] || '')}</p>

          <p className="text-[red] italic font-bold">
            Note : Writing fewer than {partIndex === 0 ? '150' : '250'} words
            may result in a lower score as you may not provide sufficient
            information. You should aim for
            {partIndex === 0 ? ' 150-170 ' : ' 250-275 '}
            words in Task {partIndex + 1}.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WritingPart;
