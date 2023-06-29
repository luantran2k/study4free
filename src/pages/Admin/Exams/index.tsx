import { lazy, useEffect, useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '../../../assets/icons/Edit';
import TrashIcon from '../../../assets/icons/Trash';
import { ExamFilter, ExamSection, ExamType } from '../../../interfaces/Exam';
import {
  useCountExamsQuery,
  useGetExamsQuery,
  useRemoveExamMutation,
} from '../../../store/queries/exams';

const CreateExamForm = lazy(
  () => import('../../../components/admin/Exams/CreateExamForm')
);
const Modal = lazy(() => import('../../../components/common/Modal'));
const Pagination = lazy(() => import('../../../components/common/Pagination'));

function ExamsAdminPage() {
  const QuantityOption = [10, 15, 20];
  const navigate = useNavigate();

  const createExamModalId = useId();
  // const [currentPage, setCurrentPage] = useState(0);
  // const [quantity, setQuantity] = useState(QuantityOption[0]);
  const [filter, setFilter] = useState<ExamFilter>({
    page: 0,
    quantity: QuantityOption[0],
    title: '',
    type: 'All',
    isNeedPaid: 'All',
  });
  const { page, quantity, title, type, isNeedPaid } = filter;

  const { data: exams, isError, isLoading } = useGetExamsQuery(filter);
  const {
    data: count,
    isLoading: isCountLoading,
    isError: isCountError,
  } = useCountExamsQuery({});
  useEffect(() => {
    setFilter((filter) => ({ ...filter, page: 0 }));
  }, [quantity]);
  const [removeExam, { isError: isRemoveError }] = useRemoveExamMutation();
  useEffect(() => {
    if (exams?.length === 0 && page !== 0) {
      setFilter((filter) => ({ ...filter, page: page - 1 }));
    }
  }, [exams, page]);

  if (isLoading && isCountLoading) {
    return <p>Loading...</p>;
  }
  if (isError && isCountError && isRemoveError) {
    return <p>Error</p>;
  }

  return (
    <>
      <div className="flex flex-col justify-between mb-8 mt-4 lg:flex-row">
        <h1 className="text-3xl font-medium">Exams</h1>
        <div className="flex flex-col md:flex-row  md:items-center gap-4 ">
          <input
            type="text"
            value={title}
            onChange={(e) =>
              setFilter((filter) => ({ ...filter, title: e.target.value }))
            }
            className="input input-bordered"
            placeholder="Enter exam title"
          />
          <div className="flex gap-2 items-center font-medium">
            <label>Type: </label>
            <select
              className="select select-bordered w-full"
              value={type}
              onChange={(e) =>
                setFilter((filter) => ({
                  ...filter,
                  type: e.target.value as ExamType,
                }))
              }
            >
              <option value="All">All</option>
              <option value="IELTS">IELTS</option>
              <option value="TOEIC">TOEIC</option>
              <option value="TOEFL">TOEFL</option>
              <option value="CEFR">CEFR</option>
            </select>
          </div>
          <div className="flex gap-2 items-center font-medium">
            <label>Paid: </label>
            <select
              className="select select-bordered w-full"
              value={isNeedPaid}
              onChange={(e) =>
                setFilter((filter) => ({
                  ...filter,
                  isNeedPaid: e.target.value as 'All' | 'true' | 'false',
                }))
              }
            >
              <option value="All">All</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <Modal
            trigger={
              <button className="btn bg-blue-500 text-white hover:bg-blue-500">
                New Exam
              </button>
            }
            modalId={createExamModalId}
          >
            <CreateExamForm modalId={createExamModalId} />
          </Modal>
        </div>
      </div>
      <div>
        <div className="overflow-auto">
          <table className="table table-zebra">
            <thead>
              <tr className="bg-blue-900 [&>th]:text-white [&>th]:py-6  [&>th]:text-[1rem]">
                <th></th>
                <th>Title</th>
                <th>Type</th>
                <th>Sections</th>
                <th>Duration(min)</th>
                <th>Is Paid</th>
                <th>Upload Date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {exams?.map((exam, index) => (
                <tr key={exam.id} className="[&>td]:py-6 ">
                  <td className="font-bold">{quantity * page + index + 1}</td>
                  <td>{exam.title}</td>
                  <td>{exam.type}</td>
                  <td className="flex gap-1 wrapper">
                    {Object.keys(exam.sections || {})
                      .filter(
                        (key) =>
                          key.includes('SectionId') &&
                          exam.sections[key as keyof ExamSection]
                      )
                      .map((key, index) => (
                        <span
                          key={key}
                          className={`bg-blue-${
                            (index + 4) * 100
                          } text-white py-1 rounded-box flex justify-center px-2  `}
                        >
                          {key.slice(0, -'SectionId'.length)[0].toUpperCase() +
                            key.slice(1, -'SectionId'.length)}
                        </span>
                      ))}
                    <span className="hidden bg-blue-700"></span>
                  </td>
                  <td>{exam.duration}</td>
                  <td>{exam.isNeedPaid ? 'Yes' : 'No'}</td>
                  <td>
                    {new Date(exam.createdAt as string).toLocaleDateString(
                      'vi-VN'
                    )}
                  </td>
                  <td className="text-blue-500 cursor-pointer  active:[&_svg]:translate-y-1 [&_svg]:transition-all ">
                    <button
                      onClick={() => navigate(`/admin/exams/edit/${exam.id}`)}
                    >
                      <EditIcon />
                    </button>
                  </td>
                  <td className="text-red-500 cursor-pointer  active:[&_svg]:translate-y-1 [&_svg]:transition-all ">
                    <button
                      onClick={() => {
                        if (confirm('Are you sure to delete this exam?')) {
                          removeExam(exam.id);
                        }
                      }}
                    >
                      <TrashIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 mx-auto w-fit">
          <Pagination
            totalPage={count?.count ? Math.ceil(count?.count / quantity) : 0}
            currentPage={page}
            quantity={quantity}
            onChangePage={(page) => {
              setFilter((filter) => ({ ...filter, page }));
            }}
            onChangeQuantity={(quantity: number) => {
              setFilter((filter) => ({ ...filter, quantity }));
            }}
            quantityOptions={QuantityOption}
            onNextClick={() => {
              setFilter((filter) => ({ ...filter, page: page + 1 }));
            }}
            onPreviousClick={() =>
              setFilter((filter) => ({ ...filter, page: page - 1 }))
            }
          />
        </div>
      </div>
    </>
  );
}

export default ExamsAdminPage;
