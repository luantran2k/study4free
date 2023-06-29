import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPartByIdQuery } from '../../../store/queries/exams';
import MediaViewer from '../MediaViewer';
import GapFilling from '../Question/GapFilling';
import SingleChoice from '../Question/SingleChoice';
import QUestionNumberList from '../QuestionIndexList';

function ListeningPart() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const { partId = '' } = useParams();
  const { data: part } = useGetPartByIdQuery({
    section: 'Listening',
    partId,
  });
  useEffect(() => {
    setQuestionIndex(0);
  }, [partId]);
  return (
    <>
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
    </>
  );
}

export default ListeningPart;
