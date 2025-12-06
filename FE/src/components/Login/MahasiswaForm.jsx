import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MahasiswaForm = () => {
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleLogin = () => {
    if (nim === "19012345" && password === "12345") {
      localStorage.setItem("role", "mahasiswa");
      localStorage.setItem("nama", "onas");
      alert("Login Mahasiswa Berhasil! ");
      navigate("/user");
    } else {
      alert("NIM atau password salah");
    }
  };

  return (
    <>
      <div className="mt-6">
        <h2 className="text-xl font-bold">Masuk Sebagai Mahasiswa</h2>
        <p className="text-sm text-gray-600">Gunakan Nim dan Password Anda</p>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">
          Nomor Induk Mahasiswa (NIM)
        </label>
        <input
          type="text"
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          className="w-full h-10 border border-gray-300 rounded-[5px] px-3 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-10 border border-gray-300 rounded-[5px] px-3 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleLogin}
        className="w-full bg-blue-700 text-white h-12 rounded-[5px] mt-6 hover:bg-blue-500 duration-300"
      >
        Masuk
      </button>
      <p className="text-center text-sm mt-4 text-gray-500">
        Belum punya akun?{" "}
        <a href="/daftar" className="text-blue-600 hover:underline">
          Daftar di sini
        </a>
      </p>
    </>
  );
};

export default MahasiswaForm;
