from utils.extensions import db
from models.admin_model import Admin
from models.student_model import Student

def get_admin_by_username(username):
    return Admin.query.filter(Admin.nama_lengkap==username).first()

def create_admin_account(username, email, password, whatsapp_number):
    new_admin = Admin(nama_lengkap=username, email=email, kata_sandi=password, nomor_whatsapp=whatsapp_number)
    db.session.add(new_admin)
    db.session.commit()
    return new_admin

def update_admin_account(username, email=None, password=None, whatsapp_number=None):
    admin = get_admin_by_username(username)
    if not admin:
        return None

    if email:
        admin.email = email
    if password:
        admin.kata_sandi = password
    if whatsapp_number:
        admin.nomor_whatsapp = whatsapp_number

    db.session.commit()
    return admin

def get_all_students():
    return Student.query.all()

def update_student_status(studentId, status):
    student = Student.query.filter(Student.nomor_induk_mahasiswa==studentId).first()
    if not student:
        return None

    student.status_akun = status
    db.session.commit()
    return student