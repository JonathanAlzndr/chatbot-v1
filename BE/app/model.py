import joblib
import pandas as pd
from .utils import clean_text

# Load model, vectorizer, dan dataset
model = joblib.load('models/chatbot_model.pkl')
vectorizer = joblib.load('models/vectorizer.pkl')
df = pd.read_excel('data/dataset_chatbot.xlsx')
df['clean_pattern'] = df['pattern'].apply(clean_text)
