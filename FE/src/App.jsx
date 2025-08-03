import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Chatbot from "./components/Chatbot/Chatbot";
import Hero from "./components/Hero/Hero";
import Login from "./pages/Login";
import Panduan from "./pages/panduan";
import Tentang from "./pages/tentang";
import MainLayout from "./layout/MainLayout";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [DarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (DarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [DarkMode]);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="font-(family-name:--font-poppins) bg-gray-100 text-gray-900 dark:bg-slate-900 dark:text-gray-100 transition-all duration-300">
      <Routes>
        {/* ini SPA Layout */}
        <Route
          element={
            <MainLayout DarkMode={DarkMode} toggleDarkMode={toggleDarkMode} />
          }
        >
          <Route
            path="/"
            element={
              <>
                <Hero openChat={() => setIsOpen(true)} />
                <Chatbot isOpen={isOpen} setIsOpen={setIsOpen} />
              </>
           }
         />
          <Route path="/panduan" element={<Panduan />} />
          <Route path="/tentang" element={<Tentang />} />
        </Route>

        {/* ini SPA Layout  end */}

        {/* page login no SPA */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
