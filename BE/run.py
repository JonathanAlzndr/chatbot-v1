from flask import Blueprint, request, jsonify

predict_bp = Blueprint("predict_bp", __name__)

@predict_bp.route("/predict", methods=["POST", "OPTIONS"])
def predict():
    # handle preflight
    if request.method == "OPTIONS":
        return jsonify({"message": "preflight ok"}), 200

    # handle request normal
    data = request.get_json()
    msg = data.get("message", "")

    return jsonify({
        "intent": "greeting",
        "response": "Hai! Ada yang bisa saya bantu?"
    }), 200
