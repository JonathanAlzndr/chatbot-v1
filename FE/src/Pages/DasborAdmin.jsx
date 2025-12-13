import React, { useState } from "react";
import DashboardHeader from "../components/Dashboard admin/DashboardHeader";
import DashboardStats from "../components/Dashboard admin/DasboardStats";
import DashboardTable from "../components/Dashboard admin/DashboardTabel";
import { UserCheck, UserX, Clock } from "lucide-react";

const DasborAdmin = () => {
  const [mahasiswaList, setMahasiswaList] = useState([
    { nim: "19011001", nama: "Ethan Williams", email: "ethan@unikadelasalle.ac.id", wa: "085212341234", status: "Menunggu", prodi: "Teknik Informatika" },
    { nim: "19011002", nama: "Sophia Mitchell", email: "sophia@unikadelasalle.ac.id", wa: "085299887744", status: "Aktif", prodi: "Sistem Informasi" },
    { nim: "19011003", nama: "Liam Anderson", email: "liam@unikadelasalle.ac.id", wa: "081234556677", status: "Menunggu", prodi: "Teknik Informatika" },
    { nim: "19011004", nama: "Isabella Thompson", email: "isabella@unikadelasalle.ac.id", wa: "082188990011", status: "Aktif", prodi: "Manajemen" },
    { nim: "19011005", nama: "Noah Rodriguez", email: "noah@unikadelasalle.ac.id", wa: "085244667788", status: "Menunggu", prodi: "Akuntansi" },
    { nim: "19011006", nama: "Emma Davis", email: "emma@unikadelasalle.ac.id", wa: "085266778899", status: "Nonaktif", prodi: "Sistem Informasi" },
    { nim: "19011007", nama: "Oliver Martinez", email: "oliver@unikadelasalle.ac.id", wa: "081299887766", status: "Ditolak", prodi: "Teknik Informatika" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua");

  const handleAction = (index, action) => {
    setMahasiswaList(prev => {
      const newList = [...prev];
      if (action === "aktifkan") newList[index].status = "Aktif";
      if (action === "nonaktifkan") newList[index].status = "Nonaktif";
      if (action === "tolak") newList[index].status = "Ditolak";
      return newList;
    });
  };

  const filteredList = mahasiswaList.filter(mhs => {
    const matchSearch = mhs.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       mhs.nim.includes(searchTerm) ||
                       mhs.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter = filterStatus === "Semua" || mhs.status === filterStatus;
    return matchSearch && matchFilter;
  });

  const stats = {
    total: mahasiswaList.length,
    aktif: mahasiswaList.filter(m => m.status === "Aktif").length,
    menunggu: mahasiswaList.filter(m => m.status === "Menunggu").length,
    nonaktif: mahasiswaList.filter(m => m.status === "Nonaktif" || m.status === "Ditolak").length,
  };

  return (
    <div className="min-h-screen mt-19 pl-70 bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <DashboardHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />

        <DashboardStats stats={stats} />

        <DashboardTable
          filteredList={filteredList}
          mahasiswaList={mahasiswaList}
          handleAction={handleAction}
        />
      </div>
    </div>
  );
};
export default DasborAdmin;
