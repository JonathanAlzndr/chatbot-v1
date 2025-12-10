import React, { useState } from "react";
import { Send } from "lucide-react";

const ChatArea = () => {
  document.body.style.overflow = "hidden"; // FIX UTAMA

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const newMessages = [...messages, userMsg];

    const botMsg = {
      from: "bot",
      text: "Ini respon dari BIMA untuk: " + input
    };

    setMessages([...newMessages, botMsg]);
    setInput("");
  };

  return (
    <div className="flex flex-col ml-[480px] pt-[90px] mt-15 p-8 h-screen overflow-hidden">
      
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <span className="font-bold text-4xl text-blue-700">B I M A</span>
            <p className="text-gray-500">Bimbingan Mahasiswa</p>
          </div>
          <h2 className="text-2xl font-semibold mb-10 text-gray-700">
            Ada Yang Bisa Saya Bantu?
          </h2>
        </div>
      )}

      <div
        className="flex flex-col gap-4 overflow-y-auto flex-grow pr-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
      >
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

        {messages.map((msg, i) => (
          <div key={i} className={`flex w-full ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`px-4 py-3 rounded-lg max-w-[90%] shadow ${
                msg.from === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 bg-white pb-6 pt-4">
        <div className="flex items-center w-full max-w-3xl mx-auto p-3">
          <input
            type="text"
            placeholder="Ketik pesan Anda..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-grow focus:outline-none text-lg border-none h-[67px] p-4 rounded-lg shadow-lg"
          />

          <button
            onClick={handleSend}
            className="ml-3 bg-blue-500 text-white rounded-xl h-[67px] px-6 hover:bg-blue-600 transition-colors"
          >
            <Send size={25} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ChatArea;
