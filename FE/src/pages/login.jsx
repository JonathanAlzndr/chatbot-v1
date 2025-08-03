import React from 'react'
import imgGoogle from "../assets/gambar/google.png"

const login = () => {
  return (
  <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900 px-4">
      <div className="w-full max-w-sm rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg px-6 py-8">
        {/* Judul */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Selamat Datang</h1>
          <h2 className="text-gray-500 dark:text-gray-300 text-sm">Chatbot Website</h2>
        </div>

        {/* Form */}
        <form className="grid gap-4 text-sm">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-10 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full h-10 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Checkbox + Link */}
          <div className="flex justify-between items-center text-xs text-gray-600 dark:text-gray-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-indigo-600" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>

        {/* Tombol */}
        <div className="grid gap-3 mt-6">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white h-10 rounded-md transition duration-300">
            Sign in
          </button>
          <button className="border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 h-10 rounded-md flex items-center justify-center gap-2 text-sm transition">
            <img src={imgGoogle} alt="Google" className="h-5" />
            Sign in with Google
          </button>
        </div>

        {/* Sign up */}
        <div className="text-center mt-6 text-xs text-gray-500 dark:text-gray-300">
          Don't have an account?{" "}
          <a href="#" className="text-black dark:text-white font-semibold hover:underline">
            Sign up for free
          </a>
        </div>
      </div>
    </main>

  )
}

export default login
