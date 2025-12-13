from ..utils.extensions import db
def get_admin_by_username(username):
    from ..models.admin_model import Admin
    return Admin.query.filter(Admin.nama_lengkap==username).first()


def create_admin_account(username, email, password, whatsapp_number):
    from ..models.admin_model import Admin
    new_admin = Admin(nama_lengkap=username, email=email, kata_sandi=password, nomor_whatsapp=whatsapp_number)
    db.session.add(new_admin)
    db.session.commit()
    return new_admin

def get_all_students():
    from ..models.student_model import Student 
    return Student.query.all()

def update_student_status(studentId, status):
    from ..models.student_model import Student
    student = Student.query.filter(Student.nomor_induk_mahasiswa==studentId).first()
    if not student:
        return None
    student.status_akun = status
    db.session.commit()