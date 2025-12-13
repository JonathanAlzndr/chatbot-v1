from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from ..services.student_service import student_login, student_register

auth_bp = Blueprint('auth', __name__, url_prefix='api/auth')

@auth_bp.route('/admin/login', methods=['POST'])
def admin_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    return admin_login(username, password)

@auth_bp.route('/admin/register', methods=['POST'])
def admin_register():
    data = request.get_json()

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    whatsapp_number = data.get('whatsapp_number')

    return admin_register(username, email, password, whatsapp_number)

@auth_bp.route('student/login', methods=['POST'])
def student_login():
    data = request.get_json()
    studentId = data.get('studentId')
    password = data.get('password')

    return student_login(studentId, password) 

@auth_bp.route('student/register', methods=['POST'])
def student_register():
    data = request.get_json()

    studentId = data.get('studentId')
    full_name = data.get('fullName')
    email = data.get('email')
    password = data.get('password')
    whatsapp_number = data('whatsapp_number')

    return student_register(studentId, full_name, email, password, whatsapp_number)