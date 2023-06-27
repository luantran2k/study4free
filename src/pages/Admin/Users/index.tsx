import { useDeferredValue, useEffect, useState } from 'react';
import TrashIcon from '../../../assets/icons/Trash';
import Pagination from '../../../components/common/Pagination';
import BaseFilter from '../../../interfaces/common/BaseFilter';
import {
  useCountUsersQuery,
  useGetUsersQuery,
  useRemoveUserMutation,
} from '../../../store/queries/users';

function UsersAdminPage() {
  const [filter, setFilter] = useState<Required<BaseFilter>>({
    page: 0,
    quantity: 10,
    search: '',
  });

  const [removeUser] = useRemoveUserMutation();

  useEffect(() => {
    if (filter.quantity) {
      setFilter((filter) => ({ ...filter, page: 0 }));
    }
  }, [filter.quantity]);
  const defferFilter = useDeferredValue(filter);
  const QuantityOption = [10, 15, 20];

  const { data: users, isLoading, isError } = useGetUsersQuery(defferFilter);
  const { data: userCount } = useCountUsersQuery(filter);
  return (
    <div>
      <div className="flex justify-between mt-4 mb-8">
        <h2 className="text-3xl font-medium">Users</h2>
        <div>
          <input
            value={filter.search}
            onChange={(e) =>
              setFilter((filter) => ({ ...filter, search: e.target.value }))
            }
            type="text"
            className="input input-bordered"
            placeholder="Search..."
          />
        </div>
      </div>
      <div>
        <div className="overflow-auto">
          <table className="table table-zebra table-pin-rows">
            <thead>
              <tr className="bg-blue-900 [&>th]:text-white  [&>th]:py-6  [&>th]:text-[1rem]">
                <th></th>
                <th>Avatar</th>
                <th>Username</th>
                <th>Email</th>
                <th>Gender</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {isLoading
                ? Array(filter.quantity)
                    .fill(undefined)
                    .map((_, index) => (
                      <tr
                        key={index}
                        className="[&_td]:py-8 [&_td]:animate-pulse"
                      >
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    ))
                : users?.map((user, index) => (
                    <tr key={user.id}>
                      <td className="font-bold">
                        {filter.quantity * filter.page + index + 1}
                      </td>
                      <td className="w-fit">
                        <img src={user.avatar} alt="" className="w-12 h-12" />
                      </td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.gender}</td>

                      <td className="text-red-500 cursor-pointer  active:[&_svg]:translate-y-1 [&_svg]:transition-all ">
                        <button
                          onClick={() => {
                            if (
                              confirm(
                                'Are you sure you want to delete this user?'
                              )
                            ) {
                              removeUser(user.id);
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
            totalPage={
              userCount?.count
                ? Math.ceil(userCount?.count / filter.quantity)
                : 0
            }
            currentPage={filter.page}
            quantity={filter.quantity}
            onChangePage={(page) => {
              setFilter((filter) => ({
                ...filter,
                page,
              }));
            }}
            onChangeQuantity={(quantity: number) => {
              setFilter((filter) => ({
                ...filter,
                quantity,
              }));
            }}
            quantityOptions={QuantityOption}
            onNextClick={() => {
              setFilter((filter) => ({
                ...filter,
                page: filter.page + 1,
              }));
            }}
            onPreviousClick={() =>
              setFilter((filter) => ({
                ...filter,
                page: filter.page - 1,
              }))
            }
          />
        </div>
      </div>
    </div>
  );
}

export default UsersAdminPage;
