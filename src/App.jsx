import React, { useEffect, useState } from 'react'
import './index.css'
import Login from '../src/components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage } from './utils/localStorage';

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    // Ensure localStorage is initialized
    setLocalStorage();
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userObj = JSON.parse(loggedInUser)
      setUser(userObj.role)
      setLoggedInUserData(userObj.data || null)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else {
      const employees = JSON.parse(localStorage.getItem('employees')) || [];
      const foundEmployee = employees.find(emp => emp.email === email && emp.password === password);
      if (foundEmployee) {
        setUser('employee');
        setLoggedInUserData(foundEmployee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: foundEmployee }));
      } else {
        alert('Invalid Credentials');
      }
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} /> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  )
}

export default App