import { useParams } from 'react-router-dom';
import Speaking from '../Speaking';
import Listening from '../Listening';
import Reading from '../Reading';
import Writing from '../Writing';

const ExamPart = () => {
  const { type } = useParams();
  return (
    <>
      {type === 'Speaking' ? (
        <Speaking />
      ) : type === 'Listening' ? (
        <Listening />
      ) : type === 'Reading' ? (
        <Reading />
      ) : (
        <Writing />
      )}
    </>
  );
};

export default ExamPart;
