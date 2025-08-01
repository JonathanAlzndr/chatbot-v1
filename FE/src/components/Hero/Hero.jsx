import { React} from 'react'
import Botimg from "../../assets/gambar/chatbot.png"
import ChatBot from "../Chatbot/Chatbot"

const Hero = ({openChat}) => {
  
  

  return (
    <section className="    grid grid-cols-2 px-4 md:px-20 sm:px-8 justify-center items-center bg-gradient-to-br py-20 text-center">
      <div className="  max-w-3xl mx-auto  sm:px-4 px-1 text-start ">
        <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold  mb-4">
          Chatbot Pembimbing Akademik
        </h1>
        <p className=" sm:text-lg text-[13px]   mb-6">
          Dapatkan bantuan akademik 24/7 — dari informasi KRS, jadwal kuliah, hingga pertanyaan seputar dosen pembimbing.
        </p>
        <button    onClick={openChat} className='bg-indigo-600 text-[15px] text-gray-100 rounded-2xl p-3  hover:bg-blue-600'>Mulai Chat</button>
            </div>

      <div className="flex justify-center items-center">
        <img className='max-h-[400px]' src={Botimg} alt="ChatBot"/>
      </div>

    </section>
  );
};

export default Hero;
