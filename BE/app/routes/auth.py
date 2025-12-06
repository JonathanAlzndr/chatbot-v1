from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required

auth_bp = Blueprint('auth', __name__, url_prefix='api/auth')

@auth_bp.route('/admin/login', methods=['POST'])
def admin_login(data):
    data_login = request.get_data()
    pass

@auth_bp.route('student/login', methods=['POST'])
def student_login(data):
    pass

@auth_bp.route('student/register', methods=['POST'])
def student_register(data):
    pass