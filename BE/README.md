# 🤖 Chatbot Naive Bayes (Flask)

Sebuah chatbot sederhana menggunakan Flask dan model Naive Bayes untuk memprediksi intent dan memberikan respons berdasarkan kemiripan input.

Setup:
python -m venv venv (Buat venv)
venv\Scripts\activate (Aktifkan venv) 
pip install -r requirements.txt (install dependencies)
python run.py (jalankan aplikasi)

http://localhost:5000/predict POST (URL Predict) 

request body: 
```{
    "message": "string"
}```

response body: 
```{
    "intent": "string",
    "response": "string"
}```

