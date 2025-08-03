import React from "react";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu'
import { Link } from 'react-router-dom';

const Navbar = ({ DarkMode, toggleDarkMode }) => {
const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (


    <nav className=" bg-white dark:text-white    dark:bg-gray-800 text-gray-800 shadow-md  py-4 flex items-center justify-between px-4 md:px-20  xl:px-28">
     {/* Mobile Hamburger Menu */}
              <div className="sm:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transitionn-all hover:text-blue-400"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transitionn-all hover:text-blue-400"
                    size={30}
                  />
                )}
                  <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
              </div>

      {/* Logo atau Judul */}
      <h1 className="md:text-2xl text-xl sm:ml-0 ml-3 font-bold tracking-wide">Chatbot Akademik</h1>

      {/* Menu Navigasi */}
      <ul className="hidden sm:flex lg:gap-25 md:gap-8 gap-4  dark:text-white  md:text-[15px] sm:text-[13px]">
       <Link to="/">
        <li className="hover:text-blue-500 cursor-pointer transition">
          Beranda
        </li>
        </Link>
        <Link to="/panduan">
        <li className="hover:text-blue-500 cursor-pointer transition">
          Panduan
        </li>
        </Link>
        <Link to="/tentang">
        <li className="hover:text-blue-500 cursor-pointer transition">
          Tentang
        </li>
        </Link>
      </ul>

      <div className=" flex justify-center items-center gap-x-9">
        {/* button login */}
        <Link to="/login">
        <button className=" ml-12 sm:ml-0 sm:block hidden dark:text-gray-100 dark:hover:bg-blue-500 rounded-[12px] hover:text-white-300 bg-indigo-600 hover:bg-blue-600 text-white sm:text-[12px] lg:w-18 w-18 h-8">
          Login
        </button>
        </Link>

        {/* button darkmode */}
        <button
          id="theme-toggle"
          title="Toggle light & dark"
          aria-label={DarkMode ? "dark" : "light"}
          aria-live="polite"
          onClick={toggleDarkMode}
          className={`sm:w-12 sm:h-12  w-10 h-10 border-gray-200 flex justify-center items-center rounded-full 
    transition-all duration-500 shadow-inner border 
    ${DarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`transition-transform duration-500 ease-in-out ${
              DarkMode ? "text-white rotate-[25deg]" : "text-gray-500 rotate-0"
            }`}
          >
            {DarkMode ? (
              // bulan

              <path
                fill="currentColor"
                d="m20 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21  12.79z"
                transform="translate(-4, -0) scale(1.2)"
              />
            ) : (
              // matahari
              <g stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            )}
          </svg>
        </button>
      </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
