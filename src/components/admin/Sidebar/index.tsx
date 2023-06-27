import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ChartLineIcon from '../../../assets/icons/ChartLine';
import FileIcon from '../../../assets/icons/File';
import UsersIcon from '../../../assets/icons/Users';
import LogoutIcon from '../../../assets/icons/logoutIcon';
import LogoImage from '../../../assets/images/logo.png';
import { logOut } from '../../../store/slices/authSlice';
function AdminSideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Link to="/" className="flex  items-center h-20 p-4">
        <img src={LogoImage} alt="Logo" className="h-full  object-contain" />
      </Link>
      <nav className="flex flex-col">
        <ul className="menu rounded-box [&_a]:text-lg [&_a]:flex [&_a]:px-3 [&_a]:py-2 [&_a.active]:text-white [&_a.active]:bg-blue-500">
          <li>
            <NavLink to={'/admin'} end>
              <span>
                <ChartLineIcon />
              </span>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={'/admin/exams'}>
              <span>
                <FileIcon />
              </span>
              Exams
            </NavLink>
          </li>
          <li>
            <NavLink to={'/admin/users'}>
              <span>
                <UsersIcon />
              </span>
              Users
            </NavLink>
          </li>
          <li
            onClick={() => {
              dispatch(logOut());
              navigate('/');
            }}
          >
            <a>
              <LogoutIcon />
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AdminSideBar;
