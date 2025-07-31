import React from "react";

const Navbar = ({DarkMode, toggleDarkMode}) => {
  return (
    <nav className="bg-white dark:text-white  dark:hover:text-blue-400  dark:bg-gray-800 text-gray-800 shadow-md  py-4 flex items-center justify-between px-20">
      {/* Logo atau Judul */}
      <h1 className="text-2xl font-bold tracking-wide">Chatbot Akademik</h1>

      {/* Menu Navigasi */}
      <ul className="flex gap-18 dark:text-white  md:text-base">
        <li className="hover:text-blue-500 cursor-pointer transition">
          Beranda
        </li>
        <li className="hover:text-blue-500 cursor-pointer transition">
          Panduan
        </li>
        <li className="hover:text-blue-500 cursor-pointer transition">
          Tentang
        </li>
      </ul>
      <div className="flex justify-center items-center gap-x-9">
        <button className="dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-500 rounded-2xl hover:text-white-300 bg-blue-500 hover:bg-blue-600 text-white w-22 h-10">
          Login
        </button>
         <button onClick={toggleDarkMode} className='px-4 py-2 bg-blue-500 text-white rounded-2xl
       transition-colors dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-500 hover:bg-blue-600 '
      >darkmode</button>

      </div>
    </nav>
  );
};

export default Navbar;
