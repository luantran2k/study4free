import { useParams } from 'react-router-dom';
import { useGetPartByIdQuery } from '../../../store/queries/exams';
import LoadingAnimate from '../../common/LoadingAnimate';

function ReadingPart() {
  const { section = '', partId = '' } = useParams();

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
    <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-12  bg-[#fff] rounded-xl shadow-2xl py-[2rem]">
      <div className="xl:col-span-7 col-span-12 px-[1rem] bg-[#f8f9fa] h-[40rem] overflow-y-auto">
        <p className="tex-[1rem] font-bold uppercase my-[1rem]">{part.title}</p>
        <p className="tex-[1rem] font-bold uppercase my-[1rem]">
          {part.description}
        </p>
        <p className="text-[red] font-bold italic">
          Note : You should spend about 20 minutes on this task. Write about the
          following topic:
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: part.questions[0].description || '',
          }}
        />
      </div>
      <div className="xl:col-span-5 col-span-12 flex flex-col p-[1rem] max-h-[40rem] overflow-y-auto">
        <div className="font-bold my-[1.5rem]">
          <div
            dangerouslySetInnerHTML={{
              __html: part.questions[0].title || '',
            }}
          />
        </div>
        <div className="flex flex-col gap-[1rem] p-[1rem]">
          {part.questions[0].answers.map((item, index: number) => {
            return (
              <div className="flex gap-[1rem]" key={index}>
                <label
                  className="bg-[#e8f2ff] w-[35px] aspect-square flex justify-center items-center rounded-full text-[#35509a] font-bold"
                  htmlFor={`${index + 1}-${index}`}
                >
                  {index + 1}
                </label>
                <input
                  className="border-[#bdc5d1] border-2 rounded-xl px-[0.5rem]"
                  key={index}
                  type="text"
                  name={`${index + 1}-${index}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ReadingPart;
