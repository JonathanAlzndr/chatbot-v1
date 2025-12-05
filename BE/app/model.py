import joblib 
import pandas as pd
import os
from .utils import clean_text

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, '../models/')
DATA_PATH = os.path.join(BASE_DIR, '../data/dataset_bima_jonas_final_v2.xlsx')

print("⏳ Loading Model & Data...")

model = joblib.load(os.path.join(MODEL_PATH, 'chatbot_model.pkl'))
vectorizer = joblib.load(os.path.join(MODEL_PATH, 'vectorizer.pkl'))

df = pd.read_excel(DATA_PATH)

if 'Pertanyaan' in df.columns:
    df['clean_pertanyaan'] = df['Pertanyaan'].apply(clean_text)
elif 'pattern' in df.columns:
    df['clean_pertanyaan'] = df['pattern'].apply(clean_text)
    if 'responses' in df.columns:
        df['Jawaban'] = df['responses']
else:
    raise ValueError("Kolom 'Pertanyaan' atau 'pattern' tidak ditemukan di Excel!")

print("Model & Data Loaded!")