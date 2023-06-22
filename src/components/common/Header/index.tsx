import { NavLink } from 'react-router-dom';
import LogoIcon from '../../../assets/images/logo.png';
import { MenuIcon } from '../../../assets/icons/menuIcon';
import { useState } from 'react';

export const Header = () => {
  const [isOpenNavBar, setOpenNavBar] = useState<boolean>(false);
  const toggleNavBar = () => {
    setOpenNavBar(!isOpenNavBar);
  };

  const closeNavBar = () => {
    setOpenNavBar(false);
  };

  return (
    <nav className="bg-transparent border-gray-200 dark:bg-gray-900 dark:border-gray-700  z-40 mx-auto shadow-lg">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4 w-full relative">
        <NavLink to={'/'} className="flex items-center">
          <img src={LogoIcon} className="w-[10rem] mr-3" alt="Flowbite Logo" />
        </NavLink>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={toggleNavBar}
        >
          <MenuIcon width={'16px'} height={'16px'} fill={'currentColor'} />
        </button>
        <div
          className={`${
            isOpenNavBar ? 'block' : 'hidden'
          } w-full md:block md:w-auto max-md:absolute bottom-[-279%] left-0 bg-white transition-all z-10`}
          id="navbar-dropdown "
        >
          <ul className="flex flex-col mt-0 uppercase font-semibold text-[#000] p-4 md:p-0 border text-[1rem]  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                onClick={closeNavBar}
                to={'/'}
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={closeNavBar}
                to={'exams'}
                className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'text-white' : '',
                    backgroundColor: isActive ? 'bg-blue-700' : '',
                  };
                }}
              >
                Examinations
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNavBar}
                to={'/vocabularies'}
                className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'text-white' : '',
                    backgroundColor: isActive ? 'bg-blue-700' : '',
                  };
                }}
              >
                Vocabulary
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNavBar}
                to={'/grammar'}
                className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'text-white' : '',
                    backgroundColor: isActive ? 'bg-blue-700' : '',
                  };
                }}
              >
                Grammar
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNavBar}
                to={'/login'}
                className="block py-2 pl-3 pr-4 text-bold  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'text-white' : '',
                    backgroundColor: isActive ? 'bg-blue-700' : '',
                  };
                }}
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
