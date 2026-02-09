-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.4.3 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table chatbot_db.admin
CREATE TABLE IF NOT EXISTS `admin` (
  `id_admin` int NOT NULL AUTO_INCREMENT,
  `nama_lengkap` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `kata_sandi` varchar(255) NOT NULL,
  `nomor_whatsapp` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_admin`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table chatbot_db.admin: ~1 rows (approximately)
INSERT INTO `admin` (`id_admin`, `nama_lengkap`, `email`, `kata_sandi`, `nomor_whatsapp`) VALUES
	(1, 'admin_baru', 'admin@mail.com', '$2b$12$P6WR0UkTwz7ms1FQ7EQGB.d9j7kugblomFLqb/KxGfCqFpRyJ97l.', '08123456789');

-- Dumping structure for table chatbot_db.alembic_version
CREATE TABLE IF NOT EXISTS `alembic_version` (
  `version_num` varchar(32) NOT NULL,
  PRIMARY KEY (`version_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table chatbot_db.alembic_version: ~1 rows (approximately)
INSERT INTO `alembic_version` (`version_num`) VALUES
	('7bc430d80a3c');

-- Dumping structure for table chatbot_db.mahasiswa
CREATE TABLE IF NOT EXISTS `mahasiswa` (
  `nomor_induk_mahasiswa` varchar(20) NOT NULL,
  `nama_lengkap` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `kata_sandi` varchar(255) NOT NULL,
  `nomor_whatsapp` varchar(20) DEFAULT NULL,
  `status_akun` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`nomor_induk_mahasiswa`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table chatbot_db.mahasiswa: ~2 rows (approximately)
INSERT INTO `mahasiswa` (`nomor_induk_mahasiswa`, `nama_lengkap`, `email`, `kata_sandi`, `nomor_whatsapp`, `status_akun`) VALUES
	('2123414', 'Alz', 'jonathan@gmail.com', '$2b$12$td7gm.qqKqlCAUtQ/8ptAOgUsCx0dXgPdmXK2NgyjwXRP4w5R4G.a', '0853251324', 'Aktif'),
	('234', 'test', '123@gmail.com', '$2b$12$S3fdiNsocgID1AM.i5dgv.7IsDpjnGUmjSfw.B0oqLhKzFWzZVYfK', '083441341', 'Menunggu');

-- Dumping structure for table chatbot_db.riwayat
CREATE TABLE IF NOT EXISTS `riwayat` (
  `id_riwayat` int NOT NULL AUTO_INCREMENT,
  `prediksi_kategori` varchar(50) NOT NULL,
  `tingkat_keyakinan` float NOT NULL,
  `respons_bot` text NOT NULL,
  `waktu` datetime DEFAULT NULL,
  `nomor_induk_mahasiswa` varchar(20) NOT NULL,
  PRIMARY KEY (`id_riwayat`),
  KEY `nomor_induk_mahasiswa` (`nomor_induk_mahasiswa`),
  CONSTRAINT `riwayat_ibfk_1` FOREIGN KEY (`nomor_induk_mahasiswa`) REFERENCES `mahasiswa` (`nomor_induk_mahasiswa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table chatbot_db.riwayat: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
