import { lazy, useEffect, useState } from 'react';
import Thumb from '../../assets/images/study.jpg';
import LoadingAnimate from '../../components/common/LoadingAnimate';
import Pagination from '../../components/common/Pagination';
import IExam, { ExamFilter } from '../../interfaces/Exam';
import {
  useCountExamsQuery,
  useGetExamsQuery,
} from '../../store/queries/exams';

const ExamCard = lazy(
  () => import('../../components/common/ExamCard/ExamCard')
);

function ExamsPage() {

  const [examFilter, setExamFilter] = useState<ExamFilter>({
    page: 0,
    quantity: 1,
    title: '',
    isNeedPaid: 'All',
    type: 'All',
  });

  const { page, quantity, title } = examFilter;

  const {
    data: exams,
    isError: isExamsError,
    isLoading: isExamsLoading,
  } = useGetExamsQuery(examFilter);
  const {
    data: countData,
    isError: isCountError,
    isLoading: isCountLoading,
  } = useCountExamsQuery(examFilter);

  useEffect(() => {
    // Reset the current page to 0 when the quantity option is changed
    setExamFilter((filter) => ({ ...filter, page: 0 }));
  }, [quantity]);

  if (isExamsLoading || isCountLoading) {
    return <LoadingAnimate />;
  }

  if (isCountError || isExamsError || !exams || !countData) {
    return <p className="text-red-500">Error</p>;
  }

  return (
    <>
      <div className="py-[40px] mb-[10px] text-white text-center font-bold text-[40px] bg-gradient-to-r from-cyan-500 to-blue-500">
        <h2 className="uppercase">Examination</h2>
      </div>
      <div className="flex flex-col h-full relative py-[3rem]">
        <div
          className="container mx-auto mb-10 bg-center bg-cover bg-no-repeat h-[400px]"
          style={{
            backgroundImage: `url(${Thumb})`,
          }}
        ></div>
        <div className="bg-transparent container mx-auto">
          <h3 className="text-4xl text-black font-bold my-8">Exam Libraries</h3>
          <input
            type="text"
            value={title}
            placeholder="Input keyword you want to search"
            className="input input-bordered w-full max-w-xs mb-8"
            onChange={(e) =>
              setExamFilter((filter) => ({
                ...filter,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex-grow-[1] container mx-auto">
          {exams.map((exam: IExam, index: number) => {
            return <ExamCard {...exam} key={index} />;
          })}

          <div className="w-fit">
            <Pagination
              totalPage={Math.ceil(countData.count / quantity)}
              currentPage={page}
              quantity={quantity}
              quantityOptions={[1, 2, 3]}
              onChangePage={(page) => {
                setExamFilter({ ...examFilter, page });
              }}
              onChangeQuantity={(quantity) => {
                setExamFilter({ ...examFilter, quantity });
              }}
              onNextClick={() =>
                setExamFilter({ ...examFilter, page: page + 1 })
              }
              onPreviousClick={() =>
                setExamFilter({ ...examFilter, page: page - 1 })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default ExamsPage;
