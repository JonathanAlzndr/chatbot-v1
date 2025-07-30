# 🤖 Chatbot Naive Bayes (Flask)

Chatbot sederhana menggunakan Flask dan algoritma Naive Bayes untuk memprediksi intent dari pesan pengguna dan memberikan respons yang sesuai.

---

## ⚙️ Langkah Instalasi & Setup

1. Clone project dari GitHub:
   git clone https://github.com/JonathanAlzndr/chatbot-v1.git

2. Masuk ke folder backend:
   cd chatbot-v1/BE

3. Buat dan aktifkan virtual environment (Windows):
   python -m venv venv
   venv\Scripts\activate

4. Install library yang dibutuhkan:
   pip install flask flask-cors scikit-learn pandas openpyxl

   (Atau jika sudah tersedia `requirements.txt`):
   pip install -r requirements.txt

5. Jalankan server backend:
   python run.py

---

## 🌐 Endpoint API

POST /predict  
http://localhost:5000/predict  
Header: Content-Type: application/json

Contoh Request:
{
  "message": "halo"
}

Contoh Response:
{
  "intent": "greeting",
  "response": "Hai! Ada yang bisa saya bantu?"
}

---

## 🛠 Kenapa Perlu CORS?

CORS (Cross-Origin Resource Sharing) diperlukan agar frontend (misalnya React atau HTML biasa) yang berjalan di `localhost:3000` bisa mengakses backend Flask di `localhost:5000`. Tanpa ini, browser akan memblokir request karena perbedaan origin.

---

## 🧠 Tips Tambahan

- Untuk lihat dataset di Excel dari VSCode, buka file `.xlsx` langsung dari sidebar atau gunakan ekstensi Excel Viewer.
- Jangan lupa buat file `.gitignore` untuk mengecualikan folder `venv`.

