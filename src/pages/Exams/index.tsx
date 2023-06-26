import React, { lazy, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Thumb from '../../assets/images/thumbEnglish.jpg';
import { SubmitHandler, useForm } from 'react-hook-form';
import Pagination from '../../components/common/Pagination';

const ExamCard = lazy(() => import('../../components/common/ExamCard/ExamCard'));


const newPag = {
  totalPage: 5,
  currentPage: 1,
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

export const mockDataExam: IMock[] = [
  {
    id: '1000',
    title: 'IELTS C18 Full Test 1',
    sections: [
      {
        id: 'C18-1-listening',
        name: '18 IELTS listening test 1',
        parts: 4,
        type: 'listening',
        questions: 40,
        participates: 42323,
        comment: 231,
        tag: ['IELTS Academic', 'Listening'],
      },
      {
        id: 'C18-1-reading',
        name: '18 IELTS reading test 1',
        parts: 3,
        type: 'reading',
        questions: 40,
        participates: 323232,
        comment: 258,
        tag: ['IELTS Academic', 'Reading'],
      },
      {
        id: 'C18-1-writing',
        name: '18 IELTS writing test 1',
        parts: 2,
        type: 'writing',
        questions: 2,
        participates: 23232,
        comment: 32,
        tag: ['IELTS Academic', 'Writing'],
      },
      {
        id: 'C18-1-speaking',
        name: '18 IELTS speaking test 1',
        parts: 3,
        type: 'speaking',
        questions: 3,
        participates: 1246,
        comment: 4,
        tag: ['IELTS Academic', 'Speaking'],
      },
    ],
  },
  {
    id: '1001',
    title: 'IELTS C18 Full Test 2',
    sections: [
      {
        id: 'C18-1-listening',
        name: '18 IELTS listening test 2',
        parts: 4,
        type: 'listening',
        questions: 40,
        participates: 24124,
        comment: 131,
        tag: ['IELTS Academic', 'Listening'],
      },
      {
        id: 'C18-2-reading',
        name: '18 IELTS reading test 2',
        parts: 3,
        type: 'reading',
        questions: 40,
        participates: 2124,
        comment: 201,
        tag: ['IELTS Academic', 'Reading'],
      },
      {
        id: 'C18-2-writing',
        name: '18 IELTS writing test 2',
        parts: 2,
        type: 'writing',
        questions: 2,
        participates: 1532,
        comment: 3,
        tag: ['IELTS Academic', 'Writing'],
      },
      {
        id: 'C18-2-speaking',
        name: '18 IELTS speaking test 2',
        parts: 3,
        type: 'speaking',
        questions: 3,
        participates: 125,
        comment: 0,
        tag: ['IELTS Academic', 'Speaking'],
      },
    ],
  },
  {
    id: '1003',
    title: 'IELTS C18 Full Test 3',
    sections: [
      {
        id: 'C18-3-listening',
        name: '18 IELTS listening test 3',
        parts: 4,
        type: 'listening',
        questions: 40,
        participates: 421,
        comment: 32,
        tag: ['IELTS Academic', 'Listening'],
      },
      {
        id: 'C18-3-reading',
        name: '18 IELTS reading test 3',
        parts: 3,
        type: 'reading',
        questions: 40,
        participates: 562,
        comment: 20,
        tag: ['IELTS Academic', 'Reading'],
      },
      {
        id: 'C18-3-writing',
        name: '18 IELTS writing test 3',
        parts: 2,
        type: 'writing',
        questions: 2,
        participates: 252,
        comment: 102,
        tag: ['IELTS Academic', 'Writing'],
      },
      {
        id: 'C18-3-speaking',
        name: '18 IELTS speaking test 3',
        parts: 3,
        type: 'speaking',
        questions: 3,
        participates: 46,
        comment: 16,
        tag: ['IELTS Academic', 'Speaking'],
      },
    ],
  },
  {
    id: '1004',
    title: 'IELTS C18 Full Test 4',
    sections: [
      {
        id: 'C18-4-listening',
        name: '18 IELTS listening test 4',
        parts: 4,
        type: 'listen',
        questions: 40,
        participates: 1328,
        comment: 75,
        tag: ['IELTS Academic', 'Listening'],
      },
      {
        id: 'C18-4-reading',
        name: '18 IELTS reading test 4',
        parts: 3,
        type: 'reading',
        questions: 40,
        participates: 162,
        comment: 58,
        tag: ['IELTS Academic', 'Reading'],
      },
      {
        id: 'C18-4-writing',
        name: '18 IELTS writing test 4',
        parts: 2,
        type: 'writing',
        questions: 2,
        participates: 339,
        comment: 60,
        tag: ['IELTS Academic', 'Writing'],
      },
      {
        id: 'C18-4-speaking',
        name: '18 IELTS speaking test 4',
        parts: 3,
        type: 'speaking',
        questions: 3,
        participates: 164,
        comment: 50,
        tag: ['IELTS Academic', 'Speaking'],
      },
    ],
  },
];

export interface ISections {
  id: string;
  name: string;
  parts: number;
  type: string;
  questions: number;
  participates: number;
  comment: number;
  tag: string[];
}
export interface IMock {
  id: string;
  title: string;
  sections: ISections[];
}

interface ISearch {
  keyword: string;
}

function ExamsPage() {
  const location = useLocation();

  const [filteredData, setFilteredData] = useState<IMock[]>(mockDataExam);
  const [search, setSearch] = useState<string>('');
  const { register, handleSubmit } = useForm<ISearch>();

  const handleSearch: SubmitHandler<ISearch> = (data) =>
    setSearch(data.keyword.toLowerCase());

  useEffect(() => {
    const filteredItem = mockDataExam.filter((data) =>
      data.title.toLowerCase().includes(search)
    );
    setFilteredData(filteredItem);
  }, [search]);

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
            <div className="container mx-auto mb-10">
              <img src={Thumb} alt="" className="w-[100%]" />
            </div>
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
              {filteredData.length ? (
                <>
                  {filteredData.map((mock) => (
                    <ExamCard {...mock} key={mock.id}/>
                  ))}
                  <Pagination {...newPag}/>
                </>
              ) : (
                <h3 className="text-3xl text-center mx-auto mb-10 font-serif font-semibold text-sky-600">
                  No Data Found!!!
                </h3>
              )}
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
