import React, { useCallback, useEffect,useState,useContext } from 'react'
import './index.css'
import Login from '../src/components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './Context/AuthProvider';

const App = () => {

  const [User, setUser] = useState(null)
  const [loggedInUserData,setLoggedInUserData]=useState(null)
  const authData=useContext(AuthContext)
  // useEffect(() => {
  //    if(authData){
  //     const loggedInUser=localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
    
  // }, [authData])
  
  

  const handleLogin=(email,password)=>{
    if(email==="rahulheer344@gmail.com" && password==='123456789'){
      setUser({role:"admin"})
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin', email}))
    } else {
      // Check for employee login
      const employees = JSON.parse(localStorage.getItem('employees')) || [];
      const foundEmployee = employees.find(emp => emp.email === email && emp.password === password);
      if(foundEmployee){
        setUser({role:"employee"})
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', ...foundEmployee}));
      }
  }

  }
  return (
    <>
   {!User ? <Login HandleLogin={handleLogin}/> : ''}
   {User?.role === 'admin' ? <AdminDashboard/> : (User?.role === 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : '')}

    </>
  )
}

export default App