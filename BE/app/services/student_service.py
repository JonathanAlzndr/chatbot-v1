from repositories.student_repository import get_student_by_studentId, create_student_account
from utils.security import hash_password, verify_password
from flask_jwt_extended import create_access_token

def student_register(studentId, full_name, email, password, whatsapp_number):
    if get_student_by_student_id(studentId):
        return {"msg": "student ID already exists"}, 400
    
    hashed_password = hash_password(password)
    create_student_account(studentId, full_name, email, password, whatsapp_number)
    return {"msg": "User registered succesfully"}, 201
    

def student_login(studentId, password):
    student = get_student_by_student_id(studentId)
    if not student or not verify_password(password, student.password):
        return {
            "msg": "Invalid username or password"
        }, 401

    token = create_access_token(
        identity=str(student.nomor_induk_mahasiswa),
        additional_claims={"role": "Student"},
        expires_delta=timedelta(hours=24)
    )

    return {
        "msg": "success",
        "token": token,
        "role": "Student"
    }, 200
        