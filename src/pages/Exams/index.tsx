import React, { lazy, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Thumb from '../../assets/images/study.jpg';
import { SubmitHandler, useForm } from 'react-hook-form';
import Pagination from '../../components/common/Pagination';
import { useGetExamsQuery } from '../../store/queries/exams';

const ExamCard = lazy(
  () => import('../../components/common/ExamCard/ExamCard')
);

const newPag = {
  totalPage: 5,
  currentPage: 0,
  quantity: 40,
  quantityOptions: [1, 2, 3],
  onChangePage: () => {
    return;
  },
  onChangeQuantity: () => {
    return;
  },
  onNextClick: () => {
    return;
  },
  onPreviousClick: () => {
    return;
  },
};

interface ISearch {
  keyword: string;
}

function ExamsPage() {
  const location = useLocation();
  const { data, isSuccess, error, isLoading } = useGetExamsQuery({
    page: 0,
    quantity: 4,
    search: '',
  });
  useEffect(() => {
    console.log(data);
  }, [isLoading]);

  const [search, setSearch] = useState<string>('');
  const { register, handleSubmit } = useForm<ISearch>();

  const handleSearch: SubmitHandler<ISearch> = (data) =>
    setSearch(data.keyword.toLowerCase());

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <React.Fragment>
      {location.pathname === '/exams' ? (
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
              <h3 className="text-4xl text-black font-bold my-8">
                Exam Libraries
              </h3>
              <form
                onSubmit={handleSubmit(handleSearch)}
                className="flex flex-row items-center gap-3 mb-8"
              >
                <input
                  type="text"
                  placeholder="Input keyword you want to search"
                  className="input input-bordered w-full max-w-xs"
                  {...register('keyword')}
                />
                <button
                  type="submit"
                  className="btn bg-blue-400 text-white hover:bg-blue-500"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="flex-grow-[1] container mx-auto">
              <>
                {data &&
                  data.map((items) => (
                    <ExamCard props={items} key={items?.id} />
                  ))}
                <div className="w-fit">
                  <Pagination {...newPag} />
                </div>
              </>
            </div>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </React.Fragment>
  );
}
export default ExamsPage;
