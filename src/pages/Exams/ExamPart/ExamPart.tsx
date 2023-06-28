import { useParams } from 'react-router-dom';
import Speaking from '../Speaking';
import Listening from '../Listening';
import Reading from '../Reading';
import Writing from '../Writing';

const ExamPart = () => {
  const { section } = useParams();
  console.log(section);
  return (
    <>
      {section === 'Speaking' ? (
        <Speaking />
      ) : section === 'Listening' ? (
        <Listening />
      ) : section === 'Reading' ? (
        <Reading />
      ) : (
        <Writing />
      )}
    </>
  );
};

export default ExamPart;
