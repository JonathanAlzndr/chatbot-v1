const AdminForm = () => (
  <>
    <div className="mt-6">
      <h2 className="text-xl font-bold">Login Administrator</h2>
      <p className="text-sm text-gray-600">
        Masukkan kredensial admin untuk melanjutkan
      </p>
    </div>
    <div className="mt-4">
      <label className="block text-sm font-medium mb-1">User Name</label>
      <input
        type="text"
        className="w-full h-10 border border-gray-300 rounded-[5px] px-3 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div className="mt-4">
      <label className="block text-sm font-medium mb-1">Password</label>
      <input
        type="password"
        className="w-full h-10 border border-gray-300 rounded-[5px] px-3 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <button className="w-full h-12 bg-blue-700 text-white rounded-[5px] mt-6 hover:bg-blue-500 duration-300">
      Masuk
    </button>
  </>
);
export default AdminForm;