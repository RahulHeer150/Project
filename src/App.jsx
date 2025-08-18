import React, { useCallback, useEffect,useState,useContext } from 'react'
import './index.css'
import Login from '../src/components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './Context/AuthProvider';

const App = () => {

  const [User, setUser] = useState(null)

  const HandleLogin=(email,password)=>{
    if(email=="rahulheer344@gmail.com" && password=='123456789'){
      console.log("admin")
    }
    else if(email=="simranjit@gmail.com"&& password=='123'){
      console.log('employee')

    }
    else{
      alert('invalid Credentials')
    }

  }

  const data=useContext(AuthContext)
  console.log(data)
  HandleLogin("rahulheer344@gmail.com",123456789)
  return (
    <>
   {!User ? <Login HandleLogin={HandleLogin}/>: ''}
   {User=='Admin' ? <AdminDashboard/>:<EmployeeDashboard/>}

    </>
  )
}

export default App