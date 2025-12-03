import React from "react";
import BgBeranda from "../assets/BgBeranda.jpg";
import { SiChatbot } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Beranda = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BgBeranda})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full  h-screen  bg-bg-page"
    >
      {/* Navbar Beranda */}
      <section className="flex justify-center items-center h-30">
        <nav className=" bg-white/30 border backdrop-blur-md w-250 flex justify-between items-center px-20 py-3 rounded-full text-white">
          <h1 className="text-blue-500 font-bold">B I M A</h1>
          <div className="flex text-black gap-4">
            {/* alamat url */}
            <NavLink to="/login" end>
              <button className="hover:scale-105 duration-100 rounded-full bg-white text-[15px] p-1  w-30">
                Masuk
              </button>
            </NavLink>
            <NavLink to="/daftar" end>
              <button className="hover:scale-105 duration-100 rounded-full bg-blue-700 text-white p-1 text-[15px]  w-30">
                Daftar
              </button>
            </NavLink>
            {/* end */}
          </div>
        </nav>
      </section>

      {/* Main heroo */}
      <main className="flex flex-col gap-10 items-center justify-center p-25">
        <div className="flex flex-col justify-center text-center items-center px-35 gap-6">
          <section className=" flex items-center justify-center gap-4 bg-white p-2 rounded-4xl w-90">
            <SiChatbot className="text-blue-500" />{" "}
            <h1 className="text-blue-500 font-semibold">
              Asisten AI Bimbingan Akademik
            </h1>
          </section>
          <h1 className="text-5xl font-semibold text-black text-center">
            Efektifkan Studi, Rencanakan KRS, dan Raih IP Maksimal dengan BIMA
            Chatbot Akademik!
          </h1>
          <h2 className="text-xl">
            Layanan 24/7 untuk semua pertanyaan kurikulum, jadwal kuliah, nilai
            KHS, dan prosedur perwalian akademik Anda.
          </h2>
        </div>

        {/* button heroo */}
        <div className=" flex gap-16">
          {/* Button ke Wa Admin */}
          <button className="hover:scale-105 duration-100 rounded-full flex items-center gap-2 justify-center bg-blue-700 font-bold text-[15px] p-2 text-white  w-60">
            <FaWhatsapp className="text-xl" /> Konsultasi dengan Kami
          </button>
          {/* Link to Page daftar */}
          <NavLink to="/daftar" end>
            <button className="hover:scale-105 duration-100 rounded-full flex items-center gap-3 justify-center bg-white text-black font-bold p-2 text-[15px]  w-45">
              Daftar sekarang <FaArrowRight />
            </button>
          </NavLink>
        </div>
      </main>
    </div>
  );
};

export default Beranda;
