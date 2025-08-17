import React, { useEffect,useState } from 'react'
import './index.css'
import Login from '../src/components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

const App = () => {

  const [User, setUser] = useState(null)

  const HandleLogin=(email,password)=>{
    if(email=="rahulheer344@gmail.com" && password=='123456789'){
      console.log('hey!!! Admin')
    }
    else if(email=="simranjit@gmail.com"&& password=='123'){
      console.log("hey new user");

    }
    else{
      alert('invalid Credentials')
    }

  }
  HandleLogin("rahulheer344@gmail.com",123456789)
  return (
    <>
   {/* <div className='bg-gray-800 h-screen w-screen text-white'>  */}
      {/* <Login/> */}
      {/* <AdminDashboard/> */}
    {/* </div> */}
   {!User ? <Login HandleLogin={HandleLogin}/>: ''}

    </>
  )
}

export default App