from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required

admin_bp = Blueprint('admin', __name__, url_prefix='api/admin')

@admin_bp.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    pass

@admin_bp.route('/profile', methods=['PATCH'])  
@jwt_required()
def update_profile():
    pass

@admin_bp.route('/students', methods=['GET'])
@jwt_required()
def list_students():
    pass

@admin_bp.route('/students/<int:student_id>', methods=['GET'])
@jwt_required()
def get_student_detail(student_id):
    pass

@admin_bp.route('/students/<int:student_id>', methods=['PATCH'])
@jwt_required()
def update_student(student_id):
    pass



