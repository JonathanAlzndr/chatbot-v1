import React from "react";
import { Send } from "lucide-react";
// Asumsi menggunakan library ikon seperti lucide-react

const ChatArea = () => {
  return (
    <div className="flex flex-col flex-grow  p-8 h-screen">
      {/* Konten Utama (Di tengah) */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <div className="mb-4">
          {/* Placeholder untuk ikon Chatbot BIMA */}

          <span className="font-bold text-4xl text-blue-700">B I M A</span>
          <p className="text-gray-500">Bimbingan Mahasiswa</p>
        </div>
        <h2 className="text-2xl font-semibold mb-10 text-gray-700">
          Ada Yang Bisa Saya Bantu?
        </h2>
      </div>

      {/* Footer dan Input Chat */}
      <div className="mt-auto space-y-4">
        {/* Input Area */}
        <div className="flex items-center w-full max-w-3xl mx-auto p-3">
          <input
            type="text"
            placeholder="Ketik pesan Anda..."
            className="flex-grow focus:outline-none text-lg border-none h-[67px] p-4  rounded-lg shadow-lg"
          />
          <button className=" ml-3 bg-blue-500 text-white rounded-xl h-[67px] p-6  hover:bg-blue-600 transition-colors">
            <Send size={25} />
          </button>
        </div>

        {/* Tombol Saran Cepat (Quick Suggestions) */}
        <div className="flex justify-center space-x-4 pb-4">
          <button className="px-4 py-2 text-sm bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors">
            Saran Cepat 1
          </button>
          <button className="px-4 py-2 text-sm bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors">
            Saran Cepat 2
          </button>
          <button className="px-4 py-2 text-sm bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors">
            Saran Cepat 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
