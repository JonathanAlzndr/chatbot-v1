import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-white shadow-md  py-4 flex items-center justify-between px-20">
      {/* Logo atau Judul */}
      <div className="text-xl font-bold tracking-wide">
        🎓 Chatbot Akademik
      </div>

      {/* Menu Navigasi */}
      <ul className="flex gap-6 text-sm md:text-base">
        <li className="hover:text-yellow-300 cursor-pointer transition">Beranda</li>
        <li className="hover:text-yellow-300 cursor-pointer transition">Panduan</li>
        <li className="hover:text-yellow-300 cursor-pointer transition">Tentang</li>
        <li className="hover:text-yellow-300 cursor-pointer transition">Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
