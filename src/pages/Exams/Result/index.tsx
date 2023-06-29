import { Link, useParams } from 'react-router-dom';
import { useGetSectionResultByIdQuery } from '../../../store/queries/exams';
import LoadingAnimate from '../../../components/common/LoadingAnimate';
import { ISectionResult } from '../../../interfaces/SectionResponse';

function ResultPage() {
  const { resultId = '' } = useParams();
  const {
    data: result,
    isLoading,
    isError,
  } = useGetSectionResultByIdQuery(resultId);
  if (isLoading) {
    return <LoadingAnimate />;
  }

  if (isError) {
    return <p className="text-red-500">Error</p>;
  }

  const { title, score, numberOfTrueQuestion, totalQuestion, examId, section } =
    result as ISectionResult;
  return (
    <div className="flex  items-center justify-center h-full my-16">
      <div className="flex flex-col items-center shadow-xl py-12 px-4 sm:px-12 rounded-xl">
        <p className="text-3xl font-medium">{title}</p>
        <p className="text-9xl my-8">{score}</p>
        <p className="text-2xl">
          {numberOfTrueQuestion}/{totalQuestion}
        </p>
        <p className="text-2xl">Section: {section}</p>
        <Link
          to="/"
          className="mt-8 btn bg-blue-500 hover:bg-blue-500 text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ResultPage;
