import React from "react";

const Navbar = ({ DarkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-white dark:text-white    dark:bg-gray-800 text-gray-800 shadow-md  py-4 flex items-center justify-between px-20">
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
        <button className=" dark:text-gray-100 dark:hover:bg-blue-500 rounded-2xl hover:text-white-300 bg-indigo-600 hover:bg-blue-600 text-white w-22 h-10">
          Login
        </button>

 
      {/* button darkmode */}
        <button
          id="theme-toggle"
          title="Toggle light & dark"
          aria-label={DarkMode ? "dark" : "light"}
          aria-live="polite"
          onClick={toggleDarkMode}
          className={`w-12 h-12  border-gray-200 flex justify-center items-center rounded-full 
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
    </nav>
  );
};

export default Navbar;
