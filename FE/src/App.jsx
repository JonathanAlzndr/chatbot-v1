import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./Pages/Beranda";
import Daftar from "./pages/Daftar";
import Login from "./pages/Login";
import ChatUser from "./pages/ChatUser";
import DasborAdmin from "./pages/DasborAdmin";
import Profil from "./pages/Profil";
import LayoutUser from "./Layout/LayoutUser";
import AdminLayout from "./Layout/AdminLayout"; 

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Rute Publik */}
          <Route path="/" element={<Beranda />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/login" element={<Login />} />

          {/* Rute user */}
          <Route element={<LayoutUser />}>
            <Route path="/chat" element={<ChatUser />} />
            <Route path="/profil" element={<Profil />} />
          </Route>
          {/* Rute Admin */}
          <Route element={<AdminLayout />}>
          <Route path="/admin" element={<DasborAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
