import { NavLink } from 'react-router-dom';
import LogoIcon from '../../../assets/images/logo.png';
import { MenuIcon } from '../../../assets/icons/menuIcon';

export const Header = () => {
  return (
    <nav className="bg-transparent w-[80%] border-gray-200 dark:bg-gray-900 dark:border-gray-700  z-40 m-auto">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4 w-full">
        <NavLink to={'/'} className="flex items-center">
          <img src={LogoIcon} className="w-[10rem] mr-3" alt="Flowbite Logo" />
        </NavLink>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <MenuIcon width={'16px'} height={'16px'} fill={'currentColor'} />
        </button>
        <div
          className="hidden w-full md:block md:w-auto "
          id="navbar-dropdown "
        >
          <ul className="flex flex-col m-auto uppercase font-semibold text-[#000] p-4 md:p-0 mt-4 border text-[1rem]  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to={'/'}
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={'exams'}
                className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Examinations
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/vocabularies'}
                className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Vocabulary
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/grammar'}
                className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Grammar
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/login'}
                className="block py-2 pl-3 pr-4 text-bold  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
