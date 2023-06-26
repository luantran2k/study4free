import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AnalyzeIcon from '../../assets/icons/analyzeIcon';
import UserIcon from '../../assets/icons/User';
import CollectionIcon from '../../assets/icons/collectionIcon';
import ReminderIcon from '../../assets/icons/reminderIcon';
import LogoutIcon from '../../assets/icons/logoutIcon';
import DeletedUserIcon from '../../assets/icons/deletedUserIcon';
import UpgradeUserIcon from '../../assets/icons/upgradeUserIcon';
import { useAppDispatch } from '../../hooks/redux';
import { logOut } from '../../store/slices/authSlice';
import { NOTIFICATION_TYPE, notify } from '../../utils/notify';
import { useGetUserByIdQuery } from '../../store/queries/users';
import VipImage from '../../assets/images/vipImg.png';
import avatarUser from '../../assets/images/avatars.png';

function UserProfilePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const dataStorage = JSON.parse(
    localStorage.getItem('user') as string
  ).userInfo;
  const { data } = useGetUserByIdQuery(dataStorage?.id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
  useEffect(() => {
    navigate('analyzeResults');
  }, []);

  const onLogOut = (): void => {
    dispatch(logOut());
    notify(NOTIFICATION_TYPE.SUCCESS, 'Log out success');
    navigate('/');
  };
  return (
    <div className="grid grid-rows-1 grid-cols-12">
      <div className="col-span-1 hidden max-lg:block min-h-[93vh] max-md:col-span-2">
        <div className="p-3 mt-2">
          <img src={data?.avatar} alt="" className="rounded-[50%]" />
        </div>
        <div className="flex flex-col justify-center items-center mt-6">
          <NavLink
            to="analyzeResults"
            className="text-[24px] w-[100%] flex justify-center py-5"
            style={({ isActive }) => {
              return {
                color: isActive ? '#fff' : '#40634d',
                backgroundColor: isActive ? '#40634d' : '',
              };
            }}
          >
            <AnalyzeIcon />
          </NavLink>
          <NavLink
            to="userInformation"
            className="text-[24px] w-[100%] flex justify-center py-5"
            style={({ isActive }) => {
              return {
                color: isActive ? '#fff' : '#40634d',
                backgroundColor: isActive ? '#40634d' : '',
              };
            }}
          >
            <UserIcon />
          </NavLink>
          <NavLink
            to="collection"
            className="text-[24px] w-[100%] flex justify-center py-5"
            style={({ isActive }) => {
              return {
                color: isActive ? '#fff' : '#40634d',
                backgroundColor: isActive ? '#40634d' : '',
              };
            }}
          >
            <CollectionIcon />
          </NavLink>
          <NavLink
            to="reminder"
            className="text-[24px] w-[100%] flex justify-center py-5"
            style={({ isActive }) => {
              return {
                color: isActive ? '#fff' : '#40634d',
                backgroundColor: isActive ? '#40634d' : '',
              };
            }}
          >
            <ReminderIcon />
          </NavLink>
          <NavLink
            to="payment"
            className={`text-[24px] w-[100%] flex justify-center py-5 text-center ${
              data?.payment
                ? 'bg-gradient-to-r from-[#110f0e] to-[#f1e8bf] text-[#fff] pointer-events-none font-bold'
                : ''
            }`}
            style={({ isActive }) => {
              return {
                color: isActive ? '#fff' : '#40634d',
                backgroundColor: isActive ? '#40634d' : '',
              };
            }}
          >
            {data?.payment ? 'VIP' : <UpgradeUserIcon />}
          </NavLink>
          <NavLink
            to="delete"
            className="text-[24px] w-[100%] flex justify-center py-5"
            style={({ isActive }) => {
              return {
                color: isActive ? '#fff' : '#40634d',
                backgroundColor: isActive ? '#40634d' : '',
              };
            }}
          >
            <DeletedUserIcon />
          </NavLink>
          <NavLink
            to="/"
            onClick={onLogOut}
            className="text-[24px] w-[100%] flex justify-center py-5"
            style={({ isActive }) => {
              return {
                color: isActive ? '#fff' : '#40634d',
                backgroundColor: isActive ? '#40634d' : '',
              };
            }}
          >
            <LogoutIcon />
          </NavLink>
        </div>
      </div>
      <div className="col-span-3 p-[10px] relative min-h-[93vh] max-lg:hidden">
        <div className="flex items-center flex-col gap-4 p-[10px] mb-[20px]">
          <div className=" mb-[10px] relative">
            <img
              className="w-[100%] aspect-square object-cover rounded-full  shadow-2xl"
              src={data?.user ? data?.avatar : avatarUser}
              alt=""
            />
            {data?.payment && (
              <img
                className="absolute top-0  translate-x-[50%] right-0 -translate-y-[30%]	w-[7rem] "
                src={VipImage}
                alt=""
              />
            )}
          </div>
          <h4 className="font-medium text-[26px]">{data?.username}</h4>
        </div>
        <div className="flex flex-col">
          <NavLink
            to="analyzeResults"
            className="py-[10px] px-[5px] ms-[10px] text-[20px] cursor-pointer rounded-lg block"
            style={({ isActive }) => {
              return {
                color: isActive ? '#fff' : '#40634d',
                backgroundColor: isActive ? '#40634d' : '',
              };
            }}
          >
            Analyze results
          </NavLink>
          <NavLink
            to="userInformation"
            className="py-[10px] px-[5px] ms-[10px] text-[20px] cursor-pointer rounded-lg block"
            style={({ isActive }) => {
              return {
                color: isActive ? '#fff' : '#40634d',
                backgroundColor: isActive ? '#40634d' : '',
              };
            }}
          >
            Personal Information
          </NavLink>
          <NavLink
            to="collection"
            className="py-[10px] px-[5px] ms-[10px] text-[20px] cursor-pointer rounded-lg block"
            style={({ isActive }) => {
              return {
                color: isActive ? '#fff' : '#40634d',
                backgroundColor: isActive ? '#40634d' : '',
              };
            }}
          >
            Collection
          </NavLink>
          <NavLink
            to="reminder"
            className="py-[10px] px-[5px] ms-[10px] text-[20px] cursor-pointer rounded-lg block"
            style={({ isActive }) => {
              return {
                color: isActive ? '#fff' : '#40634d',
                backgroundColor: isActive ? '#40634d' : '',
              };
            }}
          >
            Calendar/ Reminder
          </NavLink>

          {data?.payment ? (
            <NavLink
              to="payment"
              className="py-[10px] px-[5px] ms-[10px] text-[20px] cursor-pointer rounded-lg block pointer-events-none bg-gradient-to-r from-[#110f0e] to-[#f1e8bf] text-[#fff] font-semibold"
            >
              You are VIP member
            </NavLink>
          ) : (
            <NavLink
              to="payment"
              className="py-[10px] px-[5px] ms-[10px] text-[20px] cursor-pointer rounded-lg block "
              style={({ isActive }) => {
                return {
                  color: isActive ? '#fff' : '#40634d',
                  backgroundColor: isActive ? '#40634d' : '',
                };
              }}
            >
              Upgrade Account
            </NavLink>
          )}
          <NavLink
            to="delete"
            className="py-[10px] px-[5px] ms-[10px] text-[20px] cursor-pointer rounded-lg block"
            style={({ isActive }) => {
              return {
                color: isActive ? '#fff' : '#40634d',
                backgroundColor: isActive ? '#40634d' : '',
              };
            }}
          >
            Delete Account
          </NavLink>
          <div
            onClick={onLogOut}
            className="   bg-[#dc3545] text-[#fff] px-[1rem] py-[0.5rem] rounded-full shadow-2xl text-center mt-[4rem] font-semibold"
          >
            <span className=" text-[20px] cursor-pointer  ">Log out</span>
          </div>
        </div>
      </div>
      <div className="col-span-9 bg-[#f0f4f3] max-lg:col-span-11 max-md:col-span-10">
        <Outlet />
      </div>
    </div>
  );
}

export default UserProfilePage;
