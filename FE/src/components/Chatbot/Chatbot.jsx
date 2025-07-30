// ChatBot.jsx
import { useState, useRef } from 'react';
import { MessageCircle, Send, Maximize } from 'react-feather';
import Botimg from "../../assets/gambar/chatbot.png"
import Profilmg from "../../assets/gambar/profil.png"
import axios from 'axios';
import {GeminiKey} from "../../config/api"

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GeminiKey}`;


export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Halo! Ada yang bisa saya bantu hari ini?' }
  ]);
  const inputRef = useRef();
  const chatBodyRef = useRef();

  const sendMessage = () => {
    const text = inputRef.current.value.trim();
    if (text) {
      const newMessages = [...messages, { type: 'user', text }];
      setMessages(newMessages);
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: 'Ini jawaban otomatis Chat bot untuk: ' + text }]);
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
      }, 600);
      inputRef.current.value = '';
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
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
        className="fixed bottom-6 right-6 bg-indigo-600 text-white px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 z-50"
      >
        <MessageCircle size={18} />
        <span>Chat</span>
      </button>

      {isOpen && (
        <div className={`fixed bottom-24 right-6 ${isExpanded ? 'w-[90vw] max-h-[90vh]' : 'w-80 max-h-[70vh]'} bg-white border border-slate-300 rounded-xl shadow-xl flex flex-col overflow-hidden transition-all duration-300 z-40`}>
          <div className="bg-slate-100 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={Botimg} className="w-8 h-8 rounded-full" alt="Bot" />
              <span className="font-medium text-slate-800">ChatBot</span>
            </div>
            <button onClick={() => setIsExpanded(!isExpanded)} className="text-slate-500 hover:text-indigo-600">
              <Maximize size={18} />
            </button>
          </div>

          <div ref={chatBodyRef} className="flex-1 p-4 overflow-y-auto space-y-4 text-sm bg-white">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 items-start ${msg.type === 'user' ? 'justify-end' : ''}`}>
                {msg.type === 'bot' && <img src={Botimg} className="w-6 h-6 rounded-full" alt="Bot" />}
                <div className={`${msg.type === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-800'} p-3 rounded-lg max-w-[75%] shadow`}>
                  {msg.text}
                </div>
                {msg.type === 'user' && <img src={Profilmg} className="w-6 h-6 rounded-full" alt="User" />}
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 p-3 bg-white">
            <div className="flex gap-2 flex-wrap mb-2">
              <button onClick={() => sendQuick('Jadwal KRS')} className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full">Jadwal KRS</button>
              <button onClick={() => sendQuick('Syarat Skripsi')} className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full">Syarat Skripsi</button>
              <button onClick={() => sendQuick('Kalender Akademik')} className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full">Kalender Akademik</button>
            </div>
            <div className="flex">
              <input
                ref={inputRef}
                type="text"
                placeholder="Tulis pertanyaan..."
                className="flex-1 border border-slate-300 px-3 py-2 rounded-l-md text-sm outline-none focus:ring-2 focus:ring-indigo-400"
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
