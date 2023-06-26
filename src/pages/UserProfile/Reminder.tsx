import { useSelector } from 'react-redux';
import TrashIcon from '../../assets/icons/Trash';
import PlusIcon from '../../assets/icons/plusIcon';
import { RootState } from '../../store';
import {
  useAddNewTodoMutation,
  useDeleteToDoMutation,
  useGetUserByIdQuery,
} from '../../store/queries/users';
import { useForm } from 'react-hook-form';
import { NOTIFICATION_TYPE, notify } from '../../utils/notify';

function Reminder() {
  const user = useSelector((state: RootState) => state.auth.userInformation);
  const { data, isLoading, isSuccess } = useGetUserByIdQuery(user?.id);
  const [addNewToDo] = useAddNewTodoMutation();
  const [deleteToDoList] = useDeleteToDoMutation();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((dataForm) => {
    console.log({
      ...dataForm,
    });
    addNewToDo(dataForm);
    notify(NOTIFICATION_TYPE.SUCCESS, 'Add new to-do successfully');
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const deleteToDo = (value: any) => {
    console.log(value.id);
    notify(NOTIFICATION_TYPE.SUCCESS, 'Delete successfully');
    deleteToDoList(value.id);
  };

  if (isSuccess) {
    return (
      <div className="py-[20px] px-[30px]">
        <h3 className="text-center text-[40px] font-medium my-[30px]">
          Calendar/ Reminder
        </h3>
        <button
          className="btn btn-primary ms-3"
          onClick={() => window.my_modal_2.showModal()}
        >
          Add new to-do list <PlusIcon />
        </button>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box" onSubmit={onSubmit}>
            <p className="font-bold text-lg mb-4">
              Hello!!! Let's make your new to-do list
            </p>
            <div>
              <label htmlFor="time">Time</label>
              <br />
              <input
                {...register('time', { required: true })}
                type="datetime-local"
                style={{ width: '100%' }}
                className=" py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px] mb-5"
                id="time"
              />
            </div>
            <div>
              <label htmlFor="todo">Things to do</label>
              <br />
              <input
                {...register('todo', { required: true })}
                type="text"
                style={{ width: '100%' }}
                className=" py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px] mb-5"
                id="todo"
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              Add
            </button>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <div className="mt-[20px] flex flex-row ms-3 gap-3 flex-wrap">
          {data.todos.map((value: any, index: number) => {
            const date = new Date(value.time);
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // Tháng trong JavaScript đếm từ 0, nên cần cộng 1
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            return (
              <div key={index} className="bg-white p-3 rounded-2xl shadow-md">
                <p className="text-warning font-medium text-[20px] mb-5">
                  {`${day}-${month}-${year}    ${hours}:${minutes}`}
                </p>
                <div className="flex justify-between items-center min-w-[250px]">
                  <p>{value.todo}</p>
                  <div
                    className="cursor-pointer text-error hover:[&_svg]:scale-150 
                  active:[&_svg]:scale-125 [&_svg]:transition-all"
                    onClick={() => deleteToDo(value)}
                  >
                    <TrashIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Reminder;
