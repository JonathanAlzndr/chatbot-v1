from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    from .routes.student_routes import student_bp
    app.register_blueprint(student_bp)

    return app