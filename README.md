🧠 Frontend Chatbot - React + Vite + Tailwind

Project ini adalah antarmuka frontend untuk chatbot Naive Bayes.

===========================================
🔧 LANGKAH-LANGKAH MENJALANKAN FRONTEND
===========================================

1. CLONE PROJECT (jika belum punya)
------------------------------------
git clone https://github.com/JonathanAlzndr/chatbot-v1.git
cd chatbot-v1/FE

2. INSTALL DEPENDENSI
-----------------------
npm install

3. JALANKAN PROJECT
-----------------------
npm run dev

4. AKSES DI BROWSER
---------------------
http://localhost:5173


===========================================
🔌 MENGHUBUNGKAN KE BACKEND (API)
===========================================

Pastikan backend  sudah berjalan di:
http://localhost:5000

Frontend akan mengirim POST ke:
http://localhost:5000/predict

Contoh respons:
{
  "intent": "greeting",
  "response": "Hai! Ada yang bisa saya bantu?"
}


===========================================
📁 STRUKTUR DASAR FOLDER
===========================================

chatbot-v1/
├── FE/           <-- folder frontend
│   ├── src/
│   ├── index.html
│   └── ...
└── BE/           <-- folder backend (Flask)

===========================================
 