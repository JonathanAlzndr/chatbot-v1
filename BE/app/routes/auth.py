from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from services.student_service import student_login, student_register

auth_bp = Blueprint('auth', __name__, url_prefix='api/auth')

@auth_bp.route('/admin/login', methods=['POST'])
def admin_login(data):
    data_login = request.get_data()
    pass

@auth_bp.route('student/login', methods=['POST'])
def student_login(data):
    studentId = data.get('studentId')
    password = data.get('password')

    return student_login(studentId, password) 

@auth_bp.route('student/register', methods=['POST'])
def student_register(data):
    studentId = data.get('studentId')
    full_name = data.get('fullName')
    email = data.get('email')
    password = data.get('password')
    whatsapp_number = data('whatsapp_number')

    return student_register(studentId, full_name, email, password, whatsapp_number)