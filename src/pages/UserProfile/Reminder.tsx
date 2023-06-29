import { useSelector } from 'react-redux';
import TrashIcon from '../../assets/icons/Trash';
import PlusIcon from '../../assets/icons/plusIcon';
import { RootState } from '../../store';
import {
  useAddNewTodoMutation,
  useChangeStatusToDoMutation,
  useDeleteToDoMutation,
  useGetUserByIdQuery,
} from '../../store/queries/users';
import { useForm } from 'react-hook-form';
import { NOTIFICATION_TYPE, notify } from '../../utils/notify';
import ToDo from '../../interfaces/Todo';

function Reminder() {
  const user = useSelector((state: RootState) => state.auth.userInformation);
  const { data, isLoading, isSuccess } = useGetUserByIdQuery(user?.id);
  const [addNewToDo] = useAddNewTodoMutation();
  const [deleteToDoList] = useDeleteToDoMutation();
  const [changeStatusToDo] = useChangeStatusToDoMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((dataForm) => {
    addNewToDo(dataForm);
    notify(NOTIFICATION_TYPE.SUCCESS, 'Add new to-do successfully');
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const deleteToDo = (value: any) => {
    notify(NOTIFICATION_TYPE.SUCCESS, 'Delete successfully');
    deleteToDoList(value.id);
  };

  const handleHiddenModal = () => {
    document.getElementById('btnClose')?.click();
  }

  const handleCompleteToDo = (e: any, value: any) => {
      console.log(value)
      const statusToDo: boolean = e.target.checked
      if(statusToDo) {
        changeStatusToDo({
          id: value.id,
          newData: {
            time: value.time,
            todo: value.todo,
            completed: true 
          }
        })
      } else {
        changeStatusToDo({
          id: value.id,
          newData: {
            time: value.time,
            todo: value.todo,
            completed: false 
          }
        })
      }
      console.log(e.target.checked)
  }

  if (isSuccess) {
    return (
      <div className="py-[20px] px-[30px]">
        <h3 className="text-center text-[40px] font-medium my-[30px]">
          Calendar/ Reminder
        </h3>

        <button
          className="btn btn-info text-white ms-3"
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
            <div className="flex gap-4">
              <button type="submit" className="btn btn-info text-white">
                Add
              </button>
              <button type="reset" className="btn btn-error text-white">
                Reset
              </button>
              <button type="button" className="btn btn-neutral text-white" onClick={handleHiddenModal}>
                Close
              </button>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button id='btnClose'>close</button>
          </form>
        </dialog>

        <div className="mt-[20px] flex flex-row ms-3 gap-3 flex-wrap">
          {data.todos.toSorted((todo1: ToDo, todo2: ToDo) => (new Date(todo1.time).getTime() - new Date(todo2.time).getTime())).map((value: ToDo, index: number) => {
            const date = new Date(value.time);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const dateNow = new Date()
            return (
              <div key={index} className="bg-white p-3 rounded-2xl shadow-md">
                <div className='flex justify-between items-center mb-5'>
                  <p className="text-warning font-medium text-[20px] ">
                    {`${day}-${month}-${year}    ${hours}:${minutes}`}
                  </p>
                  {dateNow > date ? <div className='text-error border-[1px] rounded-3xl py-1 px-4 border-rose-500'>overdue</div> 
                  : <div className='text-success border-green-500 border-[1px] rounded-3xl py-1 px-4'>undue</div>}
                </div>
                <div className="flex justify-between items-center min-w-[250px]">
                  <div className='flex gap-2'>
                    <input type="checkbox" onChange={(e) => handleCompleteToDo(e, value)}/>
                    <p className={`${value.completed ? 'line-through' : ''}`}>{value.todo}</p>
                  </div>
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
