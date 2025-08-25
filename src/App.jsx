import React, { useCallback, useEffect,useState,useContext } from 'react'
import './index.css'
import Login from '../src/components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './Context/AuthProvider';

const App = () => {

  const [User, setUser] = useState(null)
  const authData=useContext(AuthContext)
  useEffect(() => {
     if(authData){
      const loggedInUser=localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
    
  }, [authData])
  
  

  const HandleLogin=(email,password)=>{
    if(email=="rahulheer344@gmail.com" && password=='123456789'){
      console.log("admin")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(authData && authData.employees.find((e)=>email==e.email && e.password==password)){
      console.log('employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))


    }
    else{
      console.log('invalid')
    }

  }
  HandleLogin()
  return (
    <>
   {!User ? <Login HandleLogin={HandleLogin}/>: ''}
   {User=='Admin' ? <AdminDashboard/>:<EmployeeDashboard/>}

    </>
  )
}

export default App