# 🤖 Chatbot Naive Bayes (Flask)

Chatbot sederhana yang dibangun dengan Flask dan model Naive Bayes untuk memprediksi *intent* dari input pengguna, lalu memberikan respons yang relevan berdasarkan kemiripan teks.

---


## ⚙️ Instalasi

### 1. Buat & aktifkan venv

```bash
python -m venv venv
venv\Scripts\activate        # Windows
```
### 2. Install requirements & jalankan

```bash
pip install -r requirements.txt

python run.py
```

### Endpoint API

#### POST /predict
#### http://localhost:5000/predict
#### content-type: application/json

#### request body: 
```json
{
  "message": "halo"
}
```

#### response body:
```json
{
  "intent": "greeting",
  "response": "Hai! Ada yang bisa saya bantu?"
}
```
    





