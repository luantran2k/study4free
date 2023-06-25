import { lazy, useEffect, useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '../../../assets/icons/Edit';
import TrashIcon from '../../../assets/icons/Trash';
import {
  useCountExamsQuery,
  useGetExamsQuery,
  useRemoveExamMutation,
} from '../../../store/queries/exams';
const CreateExamForm = lazy(() => import('../../../components/admin/Exams/CreateExamForm'))
const Modal = lazy(() => import('../../../components/common/Modal'))
const Pagination = lazy(() => import('../../../components/common/Pagination'))

function ExamsAdminPage() {
  const QuantityOption = [10, 15, 20];
  const navigate = useNavigate();

  const createExamModalId = useId();
  const [currentPage, setCurrentPage] = useState(0);
  const [quantity, setQuantity] = useState(QuantityOption[0]);
  const {
    data: exams,
    isError,
    isLoading,
  } = useGetExamsQuery({
    page: currentPage,
    quantity,
  });
  const {
    data: count,
    isLoading: isCountLoading,
    isError: isCountError,
  } = useCountExamsQuery({});
  useEffect(() => {
    setCurrentPage(0);
  }, [quantity]);
  const [removeExam, { isError: isRemoveError }] = useRemoveExamMutation();
  useEffect(() => {
    if (exams?.length === 0 && currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  }, [exams, currentPage]);

  if (isLoading && isCountLoading) {
    return <p>Loading...</p>;
  }
  if (isError && isCountError && isRemoveError) {
    return <p>Error</p>;
  }

  return (
    <>
      <div className="flex justify-between mb-8 mt-4">
        <h1 className="text-3xl font-medium">ExamsAdminPage</h1>
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
      <div className="overflow-auto ">
        <table className="table table-zebra table-pin-rows">
          <thead>
            <tr className="bg-blue-200 [&>th]:text-black">
              <th></th>
              <th>Title</th>
              <th>Type</th>
              <th>Description</th>
              <th>Duration(minutes)</th>
              <th>Is Paid</th>
              <th>Upload Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {exams?.map((exam, index) => (
              <tr key={exam.id}>
                <td className="font-bold">
                  {quantity * currentPage + index + 1}
                </td>
                <td>{exam.title}</td>
                <td>{exam.type}</td>
                <td>{exam.description}</td>
                <td>{exam.duration}</td>
                <td>No</td>
                <td>
                  {new Date(Number(exam.createdAt)).toLocaleDateString('vi-VN')}
                </td>
                <td className="text-blue-500 cursor-pointer  active:[&_svg]:translate-y-1 [&_svg]:transition-all ">
                  <button
                    onClick={() => navigate(`/admin/exams/edit/${exam.id}`)}
                  >
                    <EditIcon />
                  </button>
                </td>
                <td className="text-red-500 cursor-pointer  active:[&_svg]:translate-y-1 [&_svg]:transition-all ">
                  <button onClick={() => removeExam(exam.id)}>
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-5 mx-auto w-fit">
          <Pagination
            totalPage={count?.count ? Math.ceil(count?.count / quantity) : 0}
            currentPage={currentPage}
            quantity={quantity}
            onChangePage={(page) => {
              setCurrentPage(page);
            }}
            onChangeQuantity={(quantity: number) => {
              setQuantity(quantity);
            }}
            quantityOptions={QuantityOption}
            onNextClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            onPreviousClick={() => setCurrentPage(currentPage - 1)}
          />
        </div>
      </div>
    </>
  );
}

export default ExamsAdminPage;
