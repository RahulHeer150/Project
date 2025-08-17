import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TaskContext from './Context/TaskContext.jsx'
import AuthContext from './Context/AuthContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContext>
   <TaskContext>
    <App />
   </TaskContext>
    
  </AuthContext>,
)
