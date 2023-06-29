import { useSelector } from 'react-redux';
import { NOTIFICATION_TYPE, notify } from '../../utils/notify';
import { RootState } from '../../store';
import { useDeleteAccountByIdMutation } from '../../store/queries/users';

function DeleteAccount() {
  const user = useSelector((state: RootState) => state.auth.userInformation);
  const [deleteAccountById] = useDeleteAccountByIdMutation();
  const deleteAccount = () => {
    notify(NOTIFICATION_TYPE.SUCCESS, 'Delete successfully');
    deleteAccountById(user?.id || '');
  };

  return (
    <div className="flex items-center justify-center mt-36 w-full max-md:px-3">
      <div className="bg-white p-10 rounded-xl shadow-lg max-md:p-4 w-[50%] max-md:w-[80%]">
        <div className="text-center text-[20px] mb-10">
          <p>Are you sure you want to delete this account ?</p>
          <p>All data and configurations will be lost.</p>
        </div>
        <div className="flex gap-5 justify-center">
          <button className="btn btn-info text-white" onClick={deleteAccount}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
