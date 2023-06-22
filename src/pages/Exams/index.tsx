import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Thumb from '../../assets/images/thumbEnglish.jpg';
import ExamCard from '../../components/common/ExamCard/ExamCard';

const mockDataExam: IMock[] = [
  {
    id: 'C18-1',
    title: 'IELTS C18 Full Test 1',
    sections: [
      {
        id: 'C18-1listening',
        name: '18 IELTS listening test 1',
        parts: 4,
        questions: 40,
        participates: 42323,
        comment: 231,
        tag: ['IELTS Academic', 'Listening'],
      },
      {
        id: 'C18-1reading',
        name: '18 IELTS reading test 1',
        parts: 3,
        questions: 40,
        participates: 323232,
        comment: 258,
        tag: ['IELTS Academic', 'Reading'],
      },
      {
        id: 'C18-1writing',
        name: '18 IELTS writing test 1',
        parts: 2,
        questions: 2,
        participates: 23232,
        comment: 32,
        tag: ['IELTS Academic', 'Writing'],
      },
      {
        id: 'C18-1speaking',
        name: '18 IELTS speaking test 1',
        parts: 3,
        questions: 3,
        participates: 1246,
        comment: 4,
        tag: ['IELTS Academic', 'Speaking'],
      },
    ],
  },
  {
    id: 'C18-2',
    title: 'IELTS C18 Full Test 2',
    sections: [
      {
        id: 'C18-1listening',
        name: '18 IELTS listening test 2',
        parts: 4,
        questions: 40,
        participates: 24124,
        comment: 131,
        tag: ['IELTS Academic', 'Listening'],
      },
      {
        id: 'C18-2reading',
        name: '18 IELTS reading test 2',
        parts: 3,
        questions: 40,
        participates: 2124,
        comment: 201,
        tag: ['IELTS Academic', 'Reading'],
      },
      {
        id: 'C18-2writing',
        name: '18 IELTS writing test 2',
        parts: 2,
        questions: 2,
        participates: 1532,
        comment: 3,
        tag: ['IELTS Academic', 'Writing'],
      },
      {
        id: 'C18-2speaking',
        name: '18 IELTS speaking test 2',
        parts: 3,
        questions: 3,
        participates: 125,
        comment: 0,
        tag: ['IELTS Academic', 'Speaking'],
      },
    ],
  },
  {
    id: 'C18-3',
    title: 'IELTS C18 Full Test 3',
    sections: [
      {
        id: 'C18-3listening',
        name: '18 IELTS listening test 3',
        parts: 4,
        questions: 40,
        participates: 421,
        comment: 32,
        tag: ['IELTS Academic', 'Listening'],
      },
      {
        id: 'C18-3reading',
        name: '18 IELTS reading test 3',
        parts: 3,
        questions: 40,
        participates: 562,
        comment: 20,
        tag: ['IELTS Academic', 'Reading'],
      },
      {
        id: 'C18-3writing',
        name: '18 IELTS writing test 3',
        parts: 2,
        questions: 2,
        participates: 252,
        comment: 102,
        tag: ['IELTS Academic', 'Writing'],
      },
      {
        id: 'C18-3speaking',
        name: '18 IELTS speaking test 3',
        parts: 3,
        questions: 3,
        participates: 46,
        comment: 16,
        tag: ['IELTS Academic', 'Speaking'],
      },
    ],
  },
  {
    id: 'C18-4',
    title: 'IELTS C18 Full Test 4',
    sections: [
      {
        id: 'C18-4listening',
        name: '18 IELTS listening test 4',
        parts: 4,
        questions: 40,
        participates: 1328,
        comment: 75,
        tag: ['IELTS Academic', 'Listening'],
      },
      {
        id: 'C18-4reading',
        name: '18 IELTS reading test 4',
        parts: 3,
        questions: 40,
        participates: 162,
        comment: 58,
        tag: ['IELTS Academic', 'Reading'],
      },
      {
        id: 'C18-4writing',
        name: '18 IELTS writing test 4',
        parts: 2,
        questions: 2,
        participates: 339,
        comment: 60,
        tag: ['IELTS Academic', 'Writing'],
      },
      {
        id: 'C18-4speaking',
        name: '18 IELTS speaking test 4',
        parts: 3,
        questions: 3,
        participates: 164,
        comment: 50,
        tag: ['IELTS Academic', 'Speaking'],
      },
    ],
  },
];
export interface IMock {
  id: string;
  title: string;
  sections: {
    id: string;
    name: string;
    parts: number;
    questions: number;
    participates: number;
    comment: number;
    tag: string[];
  }[];
}

function ExamsPage() {
  const location = useParams();
  return (
    <React.Fragment>
      {location.pathname ? (
        <Outlet />
      ) : (
        <>
          <div className="py-[40px] mb-[10px] text-white text-center font-bold text-[40px] bg-gradient-to-r from-cyan-500 to-blue-500">
            <h2 className="uppercase">Examination</h2>
          </div>
          <div className="flex flex-col h-full relative ">
            <div className="bg-transparent container mx-auto">
              <h3 className="text-4xl text-black font-bold my-8">
                Exam Libraries
              </h3>
              <div className="flex flex-row items-center gap-3 mb-8">
                <input
                  type="text"
                  placeholder="Input keyword you want to search"
                  className="input input-bordered w-full max-w-xs"
                />
                <button className="btn bg-blue-400 text-white hover:bg-blue-500">
                  Search
                </button>
              </div>
            </div>
            <div className="flex-grow-[1] container mx-auto">
              {mockDataExam.map((mock) => (
                <ExamCard {...mock} />
              ))}
            </div>
            <div className="container mx-auto mb-10">
              <img src={Thumb} alt="" className="w-[100%]" />
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
}
export default ExamsPage;
