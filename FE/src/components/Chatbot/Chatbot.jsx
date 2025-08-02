import { useState, useRef } from "react";
import { MessageCircle, Send, Maximize } from "react-feather";
import { HiOutlineX } from "react-icons/hi";
import Botimg from "../../assets/gambar/chatbot.png";
import Profilmg from "../../assets/gambar/profil.png";
import axios from "axios";
import { GeminiApi } from "../../config/api";
import { FLASK_URL } from "../../config/api";

export default function ChatBot({ isOpen, setIsOpen }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Halo! Ada yang bisa saya bantu hari ini?" },
  ]);
  const inputRef = useRef();
  const chatBodyRef = useRef();

  // pesan ke api
  const sendMessage = async () => {
    const text = inputRef.current.value.trim();
    if (!text) return;

    const newMessages = [...messages, { type: "user", text }];
    setMessages(newMessages);
    inputRef.current.value = "";
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;

    try {
      console.log("Mengirim POST ke /predict dengan:", text);

      const response = await axios.post(FLASK_URL, { message: text });

      const reply = response.data.response || "Maaf, tidak ada jawaban.";

      setMessages((prev) => [...prev, { type: "bot", text: reply }]);
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    } catch (error) {
      console.error("Gagal mendapatkan respon:", error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Maaf, server tidak merespon." },
      ]);
    }
  };

  const sendQuick = (text) => {
    inputRef.current.value = text;
    sendMessage();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed dark:text-gray-100 bottom-6 right-6 bg-indigo-600 text-white px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 z-50"
      >
        <MessageCircle size={18} />
        <span>Chat</span>
      </button>

      {isOpen && (
        <div
          className={`fixed bottom-24  right-6 ${
            isExpanded ? "w-[70vw] max-h-[76vh]" : "sm:w-100 w-70  max-h-[60vh]"
          } bg-white border border-slate-300 rounded-xl shadow-xl flex flex-col overflow-hidden transition-all duration-300 z-40`}
        >
          <div className="bg-slate-100 dark:bg-gray-800 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src={Botimg}
                className="w-8 h-8 rounded-full border-0  dark:border-white/10 dark:bg-black/30 p-1"
                alt="Bot"
              />
              <span className="font-medium dark:text-white text-slate-800">
                ChatBot
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="hidden sm:block  text-slate-500 hover:text-indigo-600"
            >
              <Maximize size={18} />
            </button>
            <HiOutlineX onClick={() => setIsOpen(!isOpen)} className="transition-all duration-300 sm:hidden hover:text-indigo-600" />
          </div>

          <div
            ref={chatBodyRef}
            className="flex-1 dark:bg-gray-900 p-4 overflow-y-auto scrollable space-y-4 text-sm bg-white"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 items-start ${
                  msg.type === "user" ? "justify-end" : ""
                }`}
              >
                {msg.type === "bot" && (
                  <img
                    src={Botimg}
                    className="w-7 h-7 rounded-full border border-white  dark:border-white/10 dark:bg-black/10 p-1"
                    alt="Bot"
                  />
                )}
                <div
                  className={`${
                    msg.type === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100   text-slate-800"
                  } p-3 rounded-lg max-w-[75%] shadow`}
                >
                  {msg.text}
                </div>
                {msg.type === "user" && (
                  <img
                    src={Profilmg}
                    className="w-6 h-6 rounded-full border border-white dark:border-white/10 dark:bg-white "
                    alt="User"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200/30 p-3 text-black bg-white dark:text-white dark:bg-gray-950">
            <div className="flex gap-2 flex-wrap mb-2">
              <button
                onClick={() => sendQuick("Jadwal KRS")}
                className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full dark:bg-gray-950 border dark:border-white/30  dark:text-blue-100 "
              >
                Jadwal KRS
              </button>
              <button
                onClick={() => sendQuick("Syarat Skripsi")}
                className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full dark:bg-gray-950 border dark:border-white/30  dark:text-blue-100 "
              >
                Syarat Skripsi
              </button>
              <button
                onClick={() => sendQuick("Kalender Akademik")}
                className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full dark:bg-gray-950 border dark:border-white/30  dark:text-blue-100 "
              >
                Kalender Akademik
              </button>
            </div>
            <div className="flex">
              <input
                ref={inputRef}
                type="text"
                placeholder="Tulis pertanyaan..."
                className="flex-1 border  border-slate-300/30 px-3 py-2 rounded-l-md text-sm outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                onClick={sendMessage}
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
