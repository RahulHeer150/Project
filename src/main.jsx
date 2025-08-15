import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import taskContext from './Context/taskContext.jsx'
import AuthContext from './Context/AuthContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContext>
   <taskContext>
    <App />
   </taskContext>
    
  </AuthContext>,
)
