// src/layout/MainLayout.jsx
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = ({ DarkMode, toggleDarkMode }) => {
  return (
    <>
      <Navbar DarkMode={DarkMode} toggleDarkMode={toggleDarkMode} />
      <Outlet /> {/* Ini tempat isi halaman berubah */}
    </>
  );
};

export default MainLayout;
