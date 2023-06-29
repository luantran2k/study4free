import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPartByIdQuery } from '../../../store/queries/exams';
import LoadingAnimate from '../../common/LoadingAnimate';
import MediaViewer from '../MediaViewer';
import GapFilling from '../Question/GapFilling';
import SingleChoice from '../Question/SingleChoice';
import QUestionNumberList from '../QuestionIndexList';

function ReadingPart() {
  const { section = '', partId = '' } = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);

  const {
    data: part,
    isLoading,
    isError,
  } = useGetPartByIdQuery({
    section,
    partId,
  });

  if (isLoading) {
    return <LoadingAnimate />;
  }

  if (isError || !part) {
    return <p className="text-red-500">Error</p>;
  }

  return (
    <div className="w-full">
      <MediaViewer audio={part?.audio} />
      <div className="flex flex-col p-[1rem] overflow-y-auto">
        {part?.type === 'Gap filling' && (
          <GapFilling
            {...part.questions[questionIndex]}
            index={questionIndex}
          />
        )}
        {part?.type === 'Single choice' && (
          <SingleChoice
            {...part.questions[questionIndex]}
            index={questionIndex}
          />
        )}
      </div>
      <QUestionNumberList
        part={part}
        questionIndex={questionIndex}
        setQuestionIndex={(index) => setQuestionIndex(index)}
      />
    </div>
  );
}

export default ReadingPart;
