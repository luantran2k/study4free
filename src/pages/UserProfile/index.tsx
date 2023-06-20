import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Avatar from "../../assets/images/avataruser.png"
import { useEffect } from "react";

function UserProfilePage() {
    const navigate = useNavigate()
    useEffect(() => {
      navigate('analyzeResults')
    }, [])
    return (
      <div className="grid grid-rows-1 grid-cols-12">
        <div className="col-span-3 p-[10px] relative">
          <div className="flex items-center flex-col gap-4 p-[10px] mb-[20px]">
            <div className="w-[120px] h-[120px] mb-[10px]">
              <img className="w-[100%] object-cover" src={Avatar} alt="" />
            </div>
            <h4 className="font-medium text-[26px]">User</h4>
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
          <div className="absolute" style={{bottom: '50px'}}>
            <span className="ms-[10px] text-[20px] cursor-pointer text-[#40634d]">
              Log out
            </span>
          </div>
        </div>
        <div className="col-span-9 bg-[#f0f4f3]">
          <Outlet />
        </div>
      </div>
    );
}

export default UserProfilePage;