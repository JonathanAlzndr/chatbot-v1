import React from 'react'
import { Outlet } from 'react-router-dom'
const AdminLayout = () => {
  return (
     <div className='h-full'>
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>

    </div>
  )
}

export default AdminLayout