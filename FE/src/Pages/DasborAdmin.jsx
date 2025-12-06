import React, { useState } from "react";

const DasborAdmin = () => {
  const [mahasiswaList, setMahasiswaList] = useState([
    { nim: "2201XXXX", nama: "OXXX XXXX XXX", email: "OXXXX@unixxx.ac.id", wa: "0852XXXXXXX", status: "Menunggu" },
    { nim: "2201XXXX", nama: "OXXX XXXX XXX", email: "OXXXX@unixxx.ac.id", wa: "0852XXXXXXX", status: "Aktif" },
    { nim: "2201XXXX", nama: "OXXX XXXX XXX", email: "OXXXX@unixxx.ac.id", wa: "0852XXXXXXX", status: "Menunggu" },
    { nim: "2201XXXX", nama: "OXXX XXXX XXX", email: "OXXXX@unixxx.ac.id", wa: "0852XXXXXXX", status: "Aktif" },
    { nim: "2201XXXX", nama: "OXXX XXXX XXX", email: "OXXXX@unixxx.ac.id", wa: "0852XXXXXXX", status: "Menunggu" },
  ]);

  const handleAction = (index, action) => {
    setMahasiswaList(prev => {
      const newList = [...prev];
      if (action === "aktifkan") newList[index].status = "Aktif";
      if (action === "nonaktifkan") newList[index].status = "Nonaktif";
      if (action === "tolak") newList[index].status = "Ditolak";
      return newList;
    });
  };

  return (
    <div className="p-15 flex flex-col justify-start items-start  w-full">
      <h1 className="font-bold text-3xl text-center mb-6 w-full">Manajemen Akun Mahasiswa</h1>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">NIM</th>
              <th className="py-3 px-4 text-left">Nama Mahasiswa</th>
              <th className="py-3 px-4 text-left">Email Kampus</th>
              <th className="py-3 px-4 text-left">No Wa</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswaList.map((mhs, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{mhs.nim}</td>
                <td className="py-2 px-4">{mhs.nama}</td>
                <td className="py-2 px-4">{mhs.email}</td>
                <td className="py-2 px-4">{mhs.wa}</td>
                <td className="py-2 px-4">
                  <span className={`p-1 rounded-full text-white text-sm ${
                    mhs.status === "Aktif" ? "bg-green-500" : mhs.status === "Menunggu" ? "bg-yellow-500" : "bg-red-500"
                  }`}>
                    {mhs.status}
                  </span>
                </td>
                <td className="py-2 px-4 space-x-2">
                  {mhs.status === "Menunggu" && (
                    <>
                      <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={() => handleAction(index, "aktifkan")}>Terima</button>
                      <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => handleAction(index, "tolak")}>Tolak</button>
                    </>
                  )}
                  {mhs.status === "Aktif" && (
                    <button className="px-2 py-1 bg-gray-500 text-white rounded" onClick={() => handleAction(index, "nonaktifkan")}>NonAktifkan</button>
                  )}
                  {mhs.status === "Ditolak" && (
                    <button className="px-2 py-1 bg-yellow-500 text-white rounded" onClick={() => handleAction(index, "aktifkan")}>Terima</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DasborAdmin;
