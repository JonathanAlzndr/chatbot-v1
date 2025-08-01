import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";
import ImgChatbot from "../../assets/gambar/chatbot.png";
import { BiLogIn } from "react-icons/bi";

const navbarLinks = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Panduan",
    link: "/",
  },
  {
    name: "Tentang",
    link: "/",
  },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "-left-[100%]"} fixed 
  bottom-0 top-0 z-20 flex h-screen w-[70%]  sm:w-[41%] flex-col justify-between
  bg-white dark:text-white px-7 pb-6 pt-8 text-black 
  transition-all duration-200 md:hidden rounded-r-xl shadow-md dark:bg-gray-900 `}
    >
      <div className="Navbar_card">
        {/* bagian atas */}
        <div>
          <div className="flex  items-center  justify-start gap-4">
            <img className="max-h-[50px]" src={ImgChatbot} alt="" />
            <div className="text-black/80">
              <h1 className="font-bold text-xl dark:text-white">Chatbot</h1>
              <h1 className="text-[13px] text-slate-500 dark:text-gray-400">
                Pembimbing Akademik
              </h1>
            </div>
            {/* Tombol Close */}
            <div className="ml-3  w-[30px] flex justify-end">
              <button
                onClick={() => setShowMenu(false)}
                className=" text-2xl text-gray-500 hover:text-[#0287a8] transition"
                aria-label="Close Menu"
              >
                <IoArrowForwardOutline />
              </button>
            </div>
          </div>
        </div>

        {/* bagian links*/}
        <div className="text-black dark:text-gray-100">
          <ul className="space-y-4 mt-12">
            {navbarLinks.map(({ name, link }) => {
              return (
                <li
                  key={name}
                  className=" hover:text-blue-700  transition-all duration-300"
                >
                  <Link
                    to={link || "/"}
                    onClick={() => setShowMenu(false)}
                    className="mb-5 inline-block"
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* button login */}
        <button className="hover:text-blue-700  transition-all duration-300 gap-3 flex justify-center items-center">
          {" "}
          <div className="pt-1">
            <BiLogIn className="" />
          </div>{" "}
          Login
        </button>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
