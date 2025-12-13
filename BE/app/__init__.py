from flask import Flask
from flask_cors import CORS
from .routes.student_routes import student_bp
from .routes.admin_routes import admin_bp
def create_app():
    app = Flask(__name__)
    CORS(app)

    app.register_blueprint(student_bp)
    app.register_blueprint(admin_bp)
    return app