import React from "react";
import { LogOut, User, Menu, ArrowLeft } from "lucide-react";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoChatbubbleOutline } from "react-icons/io5";

const Sidebar = ({ onLogoutClick }) => {
  const role = localStorage.getItem("role"); // ambil role dari login
  const chatHistory = [
    "Apa itu IPK?",
    "Cara daftar KP",
    "Persyaratan Skripsi",
    "Jadwal Dosen Pembimbing",
    "Prosedur Cuti",
    "Informasi Beasiswa",
  ];

  return (
    <div className="flex flex-col w-64 h-screen bg-gray-50 border-r border-gray-200 p-4">
      <div className="flex justify-between items-center mb-6">
        <span className="font-bold text-xl text-blue-700">B I M A</span>
        <button className="text-gray-500 hover:text-gray-700 p-1 rounded">
          <ArrowLeft size={20} />
        </button>
      </div>

      {role === "mahasiswa" && (
        <button className="flex items-center text-white justify-center p-2 mb-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
          <FaPlus size={20} className="mr-2 " />
          <span>Chat Baru</span>
        </button>
      )}

      <nav className="flex-grow space-y-2">
        {role === "mahasiswa" && (
          <NavLink
            to="/user/chat"
            className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <IoChatbubbleOutline size={20} className="mr-3" />
            <span>Chat</span>
          </NavLink>
        )}

        <NavLink
          to={role === "admin" ? "/admin/profiladmin" : "/user/profil"}
          className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <User size={20} className="mr-3" />
          <span>Profil</span>
        </NavLink>

        {role === "mahasiswa" && (
          <details open className="group">
            <summary className="flex items-center justify-between p-3 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
              <div className="flex items-center">
                <Menu size={20} className="mr-3" />
                <span>History Chat</span>
              </div>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <ul className="pl-4 mt-2 space-y-1 text-sm">
              {chatHistory.map((chat, index) => (
                <li key={index}>
                  <NavLink
                    to="/user/history"
                    className="block p-2 text-gray-600 truncate rounded-lg hover:bg-gray-100"
                  >
                    {chat}
                  </NavLink>
                </li>
              ))}
            </ul>
          </details>
        )}

        {role === "admin" && (
          <>
            <NavLink
              to="/admin/dasbor"
              className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span>Kelola Akun</span>
            </NavLink>
          
          </>
        )}
      </nav>

      <button
        onClick={onLogoutClick}
        className="flex items-center p-3 text-red-600 rounded-lg hover:bg-red-50 transition-colors mt-4 border-t border-gray-200"
      >
        <LogOut size={20} className="mr-3" />
        <span>Keluar</span>
      </button>
    </div>
  );
};

export default Sidebar;
