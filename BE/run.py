from flask import Flask, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from app.routes.student_routes import student_bp
from app.routes.admin_routes import admin_bp
from app.utils.config import Config
from app.utils.extensions import bcrypt, db, jwt, migrate
from app.models.admin_model import Admin
from app.models.history_model import History
from app.models.student_model import Student

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    
    CORS(app)
    bcrypt.init_app(app)
    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db) 

    @jwt.unauthorized_loader
    def unauthorized_callback(error):
        return jsonify(msg="Unauthorized: Token tidak ditemukan"), 401

    @jwt.expired_token_loader
    def expired_callback(jwt_header, jwt_payload):
         return jsonify(msg="Token expired"), 401
    
    @jwt.invalid_token_loader
    def invalid_token_callback(error):
        return jsonify(msg="Unauthorized: Token invalid"), 422
    
    app.register_blueprint(student_bp)
    app.register_blueprint(admin_bp)

    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)