import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = () => {
    if (user === "admin" && password === "admin123") {
      localStorage.setItem("role", "admin");
      alert("Login Admin Berhasil! ");
      navigate("/admin/dasbor");
    } else {
      alert("Username atau password salah");
    }
  };

  return (
    <>
      <div className="mt-6">
        <h2 className="text-xl font-bold">Login Administrator</h2>
        <p className="text-sm text-gray-600">
          Masukkan kredensial admin untuk melanjutkan
        </p>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">User Name</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
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
        className="w-full h-12 bg-blue-700 text-white rounded-[5px] mt-6 hover:bg-blue-500 duration-300"
      >
        Masuk
      </button>
    </>
  );
};

export default AdminForm;
