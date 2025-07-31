import { React} from 'react'
import Botimg from "../../assets/gambar/chatbot.png"
import ChatBot from "../Chatbot/Chatbot"

const Hero = ({openChat}) => {
  
  

  return (
    <section className="    grid grid-cols-2 px-20 justify-center items-center bg-gradient-to-br py-20 text-center">
      <div className="max-w-3xl mx-auto px-4 text-start ">
        <h1 className="text-4xl md:text-5xl font-bold  mb-4">
          Chatbot Pembimbing Akademik
        </h1>
        <p className="text-lg  mb-6">
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
