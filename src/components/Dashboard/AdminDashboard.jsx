import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen p-10 w-full'>
        <Header/>
        <CreateTask/>

      
    </div>
  )
}

export default AdminDashboard