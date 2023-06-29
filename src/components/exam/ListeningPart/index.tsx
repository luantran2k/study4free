import { useState } from 'react';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router-dom';
import { useGetPartByIdQuery } from '../../../store/queries/exams';
import QUestionNumberList from '../QuestionIndexList';
import SingleChoice from '../Question/SingleChoice';
import GapFilling from '../Question/GapFilling';
import MediaViewer from '../MediaViewer';

function ListeningPart() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const { partId = '' } = useParams();
  const { data: part } = useGetPartByIdQuery({
    section: 'Listening',
    partId,
  });
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
