import React from "react";
// Asumsi Anda menggunakan gambar latar belakang yang sama untuk konsistensi
import BgBeranda from "../assets/BgBeranda.jpg";

const Daftar = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BgBeranda})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
     
      className="min-h-screen bg-gray-900/50 flex-col flex justify-center items-center py-10"
    >
      <div className="text-center text-black mb-4">
        {/* Mengubah warna teks menjadi lebih gelap agar kontras dengan background */}
        <h1 className="text-3xl font-bold ">BIMA</h1>
        <p className="text-gray-800">Bimbingan Mahasiswa</p>
      </div>

      {/* Kontainer Form */}
      <div className="w-[477px] bg-white rounded-[28px] py-8 px-8 shadow-2xl">
        {/* Judul dan Deskripsi */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-gray-800">Buat Akun Baru</h2>
          <p className="text-sm text-gray-600">
            Daftar untuk mengakses BIMA Bimbingan Mahasiswa.
          </p>
        </div>

        {/* Input Fields */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="namaLengkap"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="namaLengkap"
              className="w-full h-10 border border-gray-300 rounded-[5px] px-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="nim"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nomor Induk Mahasiswa (NIM)
            </label>
            <input
              type="text"
              id="nim"
              className="w-full h-10 border border-gray-300 rounded-[5px] px-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Kampus
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-10 border border-gray-300 rounded-[5px] px-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              No Whatsapp
            </label>
            <input
              type="text"
              id="whatsapp"
              className="w-full h-10 border border-gray-300 rounded-[5px] px-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full h-10 border border-gray-300 rounded-[5px] px-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full h-10 border border-gray-300 rounded-[5px] px-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Tombol Daftar */}
          <button
            type="submit"
            className="w-full h-12 bg-blue-700 text-white hover:bg-blue-500 duration-300 font-medium rounded-[5px] mt-6 hover:bg-gray-300 transition-colors"
          >
            Daftar dan Ajukan Akun
          </button>
        </form>

        {/* Link Login */}
        <p className="text-center text-sm mt-4 text-gray-500">
          Sudah punya akun?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login di sini
          </a>
        </p>
      </div>
    </div>
  );
};

export default Daftar;
