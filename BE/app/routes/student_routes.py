from flask import Blueprint, request, jsonify
from ..utils.model import model, vectorizer, df
from ..utils.preprocessing import clean_text
from sklearn.metrics.pairwise import cosine_similarity
from flask_jwt_extended import jwt_required

student_bp = Blueprint('student', __name__, url_prefix='/api/student')

@student_bp.route('/chat', methods=['POST'])
@jwt_required()
def predict():
    data = request.get_json()
    user_input = data.get('message', '')

    if not user_input:
        return jsonify({'response': 'Input tidak boleh kosong'}), 400

    user_clean = clean_text(user_input)
    
    if not user_clean:
         return jsonify({'response': 'Maaf, saya tidak mengerti maksud Anda.'})

    user_vec = vectorizer.transform([user_clean])
    pred_intent = model.predict(user_vec)[0]

    subset = df[df['Label'] == pred_intent]

    if subset.empty:
        return jsonify({
            'intent': pred_intent, 
            'response': 'Maaf, saya belum punya jawaban spesifik untuk topik ini.'
        })


    subset_vec = vectorizer.transform(subset['clean_pertanyaan'])
    similarities = cosine_similarity(user_vec, subset_vec)

    if similarities.max() < 0.2:
        return jsonify({'intent': 'unknown','response': 'Maaf, pertanyaan kurang jelas. Bisa diperjelas?'})

    best_idx = similarities.argmax()
    
    final_response = subset.iloc[best_idx]['Jawaban'] 

    return jsonify({
        'intent': pred_intent, 
        'response': final_response
    })

@student_bp.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    pass

@student_bp.route('/profile', methods=['PATCH'])
@jwt_required()
def update_profile():
    pass