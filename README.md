Siap. Berikut **README.md** dengan **semua cara menjalankan digabung dalam satu alur utuh**. Langsung pakai.

````md
# Chatbot-v1: Academic Guidance Assistant 🤖

Repositori ini berisi pengembangan chatbot untuk membantu mahasiswa mendapatkan informasi akademik secara cepat dan responsif.

---

## Overview Project

### Background
Mahasiswa sering kesulitan mencari informasi akademik karena data tersebar dan respon admin lambat.

### Solution
**Chatbot-v1** berfungsi sebagai asisten akademik virtual. Sistem memisahkan Frontend dan Backend agar pengembangan lebih rapi dan scalable.

---

## Fitur
- Real-time chatting
- Responsive UI untuk desktop dan mobile
- Contextual search berbasis pertanyaan pengguna

---

## Tech Stack

**Frontend**
- React + Vite
- Tailwind CSS

**Backend**
- Python Flask atau FastAPI

**Tools**
- Git dan GitHub
- Postman

---

## Screenshot

![Dashboard Chat Desktop](Docs/ChatbotDekstop.png)

---

## Cara Menjalankan Project

### Prasyarat
- Node.js
- Python 3.7+

---

### Langkah Menjalankan

Clone repository:
```bash
git clone https://github.com/JonathanAlzndr/chatbot-v1.git
cd chatbot-v1
````

Masuk ke folder Backend:

```bash
cd BE
```

Buat virtual environment:

```bash
python -m venv venv
```

Aktifkan virtual environment:

Windows:

```bash
venv\Scripts\activate
```

macOS atau Linux:

```bash
source venv/bin/activate
```

Install dependency backend:

```bash
pip install -r requirements.txt
```

Jalankan backend:

```bash
python main.py
```

Buka terminal baru. Masuk ke folder Frontend:

```bash
cd FE
```

Install dependency frontend:

```bash
npm install
```

Jalankan frontend:

```bash
npm run dev
```

---

## Catatan

* Backend harus berjalan sebelum frontend.
* Gunakan browser modern untuk hasil terbaik.

```

Kalau kamu mau versi **lebih ringkas**, **bahasa lebih santai**, atau **format standar lomba atau portofolio GitHub**, bilang saja.
```
