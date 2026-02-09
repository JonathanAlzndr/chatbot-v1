# Chatbot Pembimbing Akademik Berbasis Web (Naive Bayes)
Aplikasi ini merupakan chatbot pembimbing akademik berbasis web yang menggunakan algoritma Naive Bayes untuk membantu mahasiswa memperoleh informasi akademik secara cepat tanpa harus melakukan konsultasi langsung.
Proyek ini dibuat untuk meningkatkan efisiensi proses bimbingan akademik, mengurangi antrean konsultasi, serta mempermudah mahasiswa mendapatkan jawaban awal terkait pertanyaan akademik yang umum diajukan.

## Latar Belakang

Proses bimbingan akademik yang dilakukan secara langsung atau melalui pesan pribadi (misalnya WhatsApp) sering menimbulkan beberapa kendala:

- Waktu respon dosen terbatas karena banyaknya mahasiswa
- Pertanyaan yang berulang dari mahasiswa yang berbeda
- Kesulitan dokumentasi dan pencarian riwayat konsultasi
  Dengan chatbot akademik ini, mahasiswa dapat memperoleh respon awal secara otomatis, sementara dosen dapat lebih fokus pada kasus yang membutuhkan pendampingan khusus.

## Fitur Utama
- NLP Driven Chat: Memahami pertanyaan natural mahasiswa menggunakan pipeline Sastrawi (Stemming & Stopwords).
- Hybrid Matching: Mengklasifikasikan kategori pertanyaan terlebih dahulu, baru mencari jawaban terdekat di dalam kategori tersebut untuk akurasi tinggi.
- Sistem Keamanan JWT: Autentikasi terpisah untuk Admin (Staf) dan Student (Mahasiswa).
- Manajemen Akun


## Dokumentasi Sistem

| Komponen / Alur        | Visualisasi | Keterangan |
|------------------------|------------|----------------------------|
| **Arsitektur Aplikasi** | <img src="assets/system-architecture.png" width="1000"/> | **Hybrid Architecture:** Memisahkan antara Frontend (React) dan Backend (Flask) yang terhubung via REST API. Mesin utama menggabungkan MariaDB untuk data relasional dan Excel sebagai knowledge base yang diproses oleh mesin NLP. |
| **Logic Flow (NLP)**    | <img src="assets/logic-flow.png" width="1000"/> | **Two-Stage Retrieval:** Menggunakan Naive Bayes untuk klasifikasi kategori (intent), diikuti dengan perhitungan Cosine Similarity untuk akurasi jawaban. Dilengkapi dengan threshold (0.2) untuk menjaga validitas informasi akademik. |
| **Admin Workflow**      | <img src="assets/admin-flows.png" width="1000"/> | **Security & Management:** Alur pengelolaan data mahasiswa dan profil admin yang diproteksi menggunakan JWT. Admin memiliki kendali penuh atas status akun mahasiswa (Active/Inactive) untuk menjaga keamanan sistem. |


## 🛠️ Tech Stack

### Frontend
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![React](https://img.shields.io/badge/React-Vite-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3)

### Backend & AI Engine
![Python](https://img.shields.io/badge/Python-3.x-blue?logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-black?logo=flask)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-Naive%20Bayes-orange?logo=scikit-learn)
![Pandas](https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=white)
![Sastrawi](https://img.shields.io/badge/NLP-Sastrawi%20Stemmer-green)
![Joblib](https://img.shields.io/badge/Serialization-Joblib-9cf)
![Cosine Similarity](https://img.shields.io/badge/Math-Cosine%20Similarity-red)

### Database & Storage
![MariaDB](https://img.shields.io/badge/MariaDB-003545?logo=mariadb&logoColor=white)
![Excel](https://img.shields.io/badge/Dataset-MS%20Excel-217346?logo=microsoftexcel)

### Tools & Development
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-007ACC?logo=visualstudiocode&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)
![Laragon](https://img.shields.io/badge/Laragon-0078D7?logo=laragon&logoColor=white)
![Google Colab](https://img.shields.io/badge/Google%20Colab-F9AB00?logo=googlecolab&logoColor=white)

## Instalasi

1. Clone Repository

```
git clone https://github.com/JonathanAlzndr/chatbot-v1.git
cd chatbot-v1
```

2. Setup Backend (Flask)

```
# masuk ke folder backend
cd be

# membuat virtual environment (Windows)
python -m venv venv

# aktivasi virtual environment
venv\Scripts\activate

# install dependencies
pip install -r requirements.txt
```

### 3. Setup Database (MariaDB)

1. Buat database baru di **MariaDB** (contoh: `chatbot_db`).
2. Import file database yang tersedia pada folder:

```
assets/database.sql
```

3. Buat file `.env` pada folder backend untuk konfigurasi koneksi database:

```
# Contoh .env
SECRET_KEY=your_secret_key
JWT_SECRET_KEY=jwt_secret_key
DATABASE_URI=mysql+pymysql://root:password@localhost/chatbot_db
```

4. Jalankan Server Backend:

```
flask run
```

---
5. Setup Frontend

```
# masuk ke folder frontend
cd ../fe

# install dependencies
npm install

# jalankan aplikasi
npm run dev
```

## Screenshots

### User (Mahasiswa)
<table>
  <tr>
    <td align="center"><b>Landing Page</b></td>
    <td align="center"><b>Register</b></td>
  </tr>
  <tr>
    <td><img src="assets/landing.jpeg" width="400"/></td>
    <td><img src="assets/register.jpeg" width="400"/></td>
  </tr>
  <tr>
    <td align="center"><b>Login</b></td>
    <td align="center"><b>Chatbot</b></td>
  </tr>
  <tr>
    <td><img src="assets/login.jpeg" width="400"/></td>
    <td><img src="assets/chat.png" width="400"/></td>
  </tr>
</table>

### Admin
<table>
  <tr>
    <td align="center"><b>Dashboard</b></td>
    <td align="center"><b>Profil Admin</b></td>
  </tr>
  <tr>
    <td><img src="assets/manajemen-akun.jpeg" width="400"/></td>
    <td><img src="assets/profil-admin.jpeg" width="400"/></td>
  </tr>
  <tr>
    <td align="center"><b>Edit Profil</b></td>
    <td align="center"><b>Verifikasi Akun</b></td>
  </tr>
  <tr>
    <td><img src="assets/edit-profil.jpeg" width="400"/></td>
    <td><img src="assets/verifikasi-akun.png" width="400"/></td>
  </tr>
  <tr>
    <td align="center"><b>Kelola Akun</b></td>
    <td></td>
  </tr>
  <tr>
    <td><img src="assets/kelola-akun.jpeg" width="400"/></td>
    <td></td>
  </tr>
</table>

## Contributors:

- [Jonathan Alezandro](https://github.com/JonathanAlzndr) (Backend Developer)
- [Daniel Warouw](https://github.com/Niel-D22) (Frontend Developer)
