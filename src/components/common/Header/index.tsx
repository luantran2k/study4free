import { NavLink, useLocation } from 'react-router-dom';
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
                style={{
                  display: 'block',
                  padding: '8px 0.75rem',
                }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent rounded-xl'
                    : 'text-black'
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={closeNavBar}
                to={'exams'}
                style={{
                  display: 'block',
                  padding: '8px 0.75rem',
                }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent rounded-xl'
                    : 'text-black'
                }
              >
                Examinations
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNavBar}
                to={'/vocabularies'}
                style={{
                  display: 'block',
                  padding: '8px 0.75rem',
                }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent rounded-xl'
                    : 'text-black'
                }
              >
                Vocabulary
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNavBar}
                to={'/grammar'}
                style={{
                  display: 'block',
                  padding: '8px 0.75rem',
                }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent rounded-xl'
                    : 'text-black'
                }
              >
                Grammar
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNavBar}
                to={'/login'}
                style={{
                  display: 'block',
                  padding: '8px 0.75rem',
                }}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent rounded-xl'
                    : 'text-black'
                }
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
