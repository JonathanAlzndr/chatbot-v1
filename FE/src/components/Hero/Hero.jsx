import React from 'react'
import Botimg from "../../assets/gambar/chatbot.png"

const Hero = () => {
  return (
    <section className=" grid grid-cols-2 px-20 justify-center items-center bg-gradient-to-br from-blue-50 min-h-screen to-blue-100 py-20 text-center">
      <div className="max-w-3xl mx-auto px-4 text-start ">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Chatbot Pembimbing Akademik
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Dapatkan bantuan akademik 24/7 — dari informasi KRS, jadwal kuliah, hingga pertanyaan seputar dosen pembimbing.
        </p>
        <a href="#chatbot" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Mulai Chat
        </a>
            </div>

      <div className="flex justify-center items-center">
        <img className='max-h-[400px]' src={Botimg} alt="ChatBot"/>
      </div>

    </section>
  );
};

export default Hero;
