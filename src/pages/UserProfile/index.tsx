import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Avatar from "../../assets/images/avataruser.png"
import { useEffect } from "react";
import AnalyzeIcon from "../../assets/icons/analyzeIcon";
import UserIcon from "../../assets/icons/User";
import CollectionIcon from "../../assets/icons/collectionIcon";
import ReminderIcon from "../../assets/icons/reminderIcon";
import LogoutIcon from "../../assets/icons/logoutIcon";
import DeletedUserIcon from "../../assets/icons/deletedUserIcon";
import UpgradeUserIcon from "../../assets/icons/upgradeUserIcon";
import { useGetUserByIdQuery } from "../../store/queries/users";


function UserProfilePage() {
    const { data } = useGetUserByIdQuery('6495dfe83d98bcaa6a70ad9a')
    const navigate = useNavigate()
    const { pathname } = useLocation()
    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
    useEffect(() => {
      navigate('analyzeResults')
    }, [])
    return (
      <div className="grid grid-rows-1 grid-cols-12">
        <div className="col-span-1 hidden max-lg:block min-h-[93vh] max-md:col-span-2">
          <div className="p-3 mt-2">
            <img src={data?.avatar} alt="" />
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
              className="text-[24px] w-[100%] flex justify-center py-5 text-center"
              style={({ isActive }) => {
                return {
                  color: isActive ? '#fff' : '#40634d',
                  backgroundColor: isActive ? '#40634d' : '',
                };
              }}
            >
              <UpgradeUserIcon />
            </NavLink>
            <NavLink
              to="*"
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
              to="/login"
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
            <div className="w-[120px] h-[120px] mb-[10px]">
              <img className="w-[100%] object-cover" src={data?.avatar} alt="" />
            </div>
            <h4 className="font-medium text-[26px]">{data?.username}</h4>
          </div>
          <div>
            <ul>
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
              <NavLink
                to="payment"
                className="py-[10px] px-[5px] ms-[10px] text-[20px] cursor-pointer rounded-lg block"
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#fff' : '#40634d',
                    backgroundColor: isActive ? '#40634d' : '',
                  };
                }}
              >
                Upgrade Account
              </NavLink>
              <NavLink
                to="*"
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
            </ul>
          </div>
          <div className="absolute" style={{ bottom: '50px' }}>
            <span className="ms-[10px] text-[20px] cursor-pointer text-[#40634d]">
              Log out
            </span>
          </div>
        </div>
        <div className="col-span-9 bg-[#f0f4f3] max-lg:col-span-11 max-md:col-span-10">
          <Outlet />
        </div>
      </div>
    );
}

export default UserProfilePage;