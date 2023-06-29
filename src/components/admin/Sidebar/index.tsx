import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ChartLineIcon from '../../../assets/icons/ChartLine';
import FileIcon from '../../../assets/icons/File';
import UsersIcon from '../../../assets/icons/Users';
import LogoutIcon from '../../../assets/icons/logoutIcon';
import LogoImage from '../../../assets/images/logo.png';
import { logOut } from '../../../store/slices/authSlice';

type Props = {
  hideSideBar?: () => void;
};

function AdminSideBar({ hideSideBar }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white">
      <Link to="/" className="flex  items-center h-20 p-4">
        <img src={LogoImage} alt="Logo" className="h-full  object-contain" />
      </Link>
      <nav className="flex-1">
        <ul className="h-full menu rounded-box [&_a]:text-lg [&_a]:text-slate-600 [&_a]:flex [&_span]:w-6 [&_a]:gap-2 [&_a]:px-6 [&_a]:py-4 [&_a.active]:text-white [&_a.active]:bg-blue-500">
          <li>
            <NavLink onClick={hideSideBar} to={'/admin'} end>
              <span>
                <ChartLineIcon />
              </span>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink onClick={hideSideBar} to={'/admin/exams'}>
              <span>
                <FileIcon />
              </span>
              Exams
            </NavLink>
          </li>
          <li>
            <NavLink onClick={hideSideBar} to={'/admin/users'}>
              <span>
                <UsersIcon />
              </span>
              Users
            </NavLink>
          </li>
          <li
            className="mt-auto"
            onClick={() => {
              dispatch(logOut());
              navigate('/');
            }}
          >
            <a>
              <span>
                {' '}
                <LogoutIcon />
              </span>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminSideBar;
