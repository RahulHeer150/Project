import React, { useEffect } from 'react'
import './index.css'
import Login from '../src/components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

const App = () => {
  useEffect(()=>{
   // setLocalStorage();
   getLocalStorage();

  },)
  return (
    <>
    <div className='bg-gray-800 h-screen w-screen text-white'> 
      {/* <Login/> */}
      <AdminDashboard/>
    </div>
   

    </>
  )
}

export default App