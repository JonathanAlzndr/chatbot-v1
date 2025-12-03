import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutUser = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>

    </div>
  );
};

export default LayoutUser;
