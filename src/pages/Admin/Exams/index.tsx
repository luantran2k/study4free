import { useEffect, useId, useState } from 'react';
import EditIcon from '../../../assets/icons/Edit';
import TrashIcon from '../../../assets/icons/Trash';
import Pagination from '../../../components/common/Pagination';
import { exams } from '../../../mocks/exams';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/common/Modal';
import CreateExamForm from '../../../components/admin/Exams/CreateExamForm';

function ExamsAdminPage() {
  const navigate = useNavigate();
  const createExamModalId = useId();
  const [currentPage, setCurrentPage] = useState(0);
  const [quantity, setQuantity] = useState(2);
  const totalPage = Math.ceil(exams.length / quantity);
  useEffect(() => {
    setCurrentPage(0);
  }, [quantity]);
  const getExams = () => {
    return exams.slice(currentPage * quantity, (currentPage + 1) * quantity);
  };
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
          <CreateExamForm />
        </Modal>
      </div>
      <div className="overflow-x-auto ">
        <table className="table table-zebra table-pin-rows">
          <thead>
            <tr className="bg-blue-200 [&>th]:text-black">
              <th></th>
              <th>Id</th>
              <th>Title</th>
              <th>Type</th>
              <th>Description</th>
              <th>Duration(minutes)</th>
              <th>Price($)</th>
              <th>Upload Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getExams().map((exam, index) => (
              <tr key={exam.id}>
                <td className="font-bold">
                  {quantity * currentPage + index + 1}
                </td>
                <td>{exam.id}</td>
                <td>{exam.title}</td>
                <td>{exam.type}</td>
                <td>{exam.description}</td>
                <td>{exam.duration}</td>
                <td>{exam.price.toFixed(2)}</td>
                <td>
                  {new Date(Number(exam.createdAt)).toLocaleDateString('vi-VN')}
                </td>
                <td className="text-blue-500 cursor-pointer hover:[&_svg]:scale-150 active:[&_svg]:scale-125 [&_svg]:transition-all ">
                  <EditIcon />
                </td>
                <td className="text-red-500 cursor-pointer hover:[&_svg]:scale-150 active:[&_svg]:scale-125 [&_svg]:transition-all ">
                  <TrashIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-5 mx-auto w-fit">
          <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            quantity={quantity}
            onChangePage={() => {
              return;
            }}
            onChangeQuantity={(quantity: number) => {
              setQuantity(quantity);
            }}
            quantityOptions={[2, 4, 6]}
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
