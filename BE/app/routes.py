from flask import Blueprint, request, jsonify
from .model import model, vectorizer, df
from .utils import clean_text
from sklearn.metrics.pairwise import cosine_similarity

main = Blueprint('main', __name__)

@main.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    user_input = data.get('message', '')

    if not user_input:
        return jsonify({'response': 'Input tidak boleh kosong'}), 400

    user_clean = clean_text(user_input)
    user_vec = vectorizer.transform([user_clean])
    pred_intent = model.predict(user_vec)[0]

    subset = df[df['intent'] == pred_intent]
    subset_vec = vectorizer.transform(subset['clean_pattern'])
    similarities = cosine_similarity(user_vec, subset_vec)

    if similarities.max() < 0.2:
        return jsonify({'response': 'Maaf, saya tidak mengerti maksud Anda.'})

    best_idx = similarities.argmax()
    response = subset.iloc[best_idx]['response']

    return jsonify({'intent': pred_intent, 'response': response})
