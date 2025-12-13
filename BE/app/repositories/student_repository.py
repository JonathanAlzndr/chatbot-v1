from utils.extensions import db
from models.student_model import Student

def get_student_by_student_id(studentId):
    return Student.query.filter(Student.nomor_induk_mahasiswa==studentId).first()

def create_student_account(studentId, full_name, email, password, whatsapp_number):
    new_student = Student(studentId=studentId, nama_lengkap=full_name, email=email, kata_sandi=password, nomor_whatsapp=whatsapp_number)
    new_student.status_akun = "Menunggu"
    db.session.add(new_student)
    db.session.commit()
    return new_student