import { Link, NavLink } from 'react-router-dom';
import LogoImage from '../../../assets/images/logo.png';
function AdminSideBar() {
  return (
    <>
      <Link to="/" className="flex justify-center items-center h-20 p-4">
        <img
          src={LogoImage}
          alt="Logo"
          className="h-full w-full object-contain"
        />
      </Link>
      <nav className="flex flex-col">
        <ul className="menu rounded-box [&_a]:text-lg [&_a]:inline-block [&_a]:px-3 [&_a]:py-2 [&_a.active]:text-white [&_a.active]:bg-blue-500">
          <li>
            <NavLink to={'/admin'} end>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={'/admin/exams'}>Exams</NavLink>
          </li>
          <li>
            <NavLink to={'/admin/users'}>Uses</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AdminSideBar;
