import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TaskContext from './Context/taskContext.jsx'
import App from './App.jsx'
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
   <TaskContext>
    <App />
   </TaskContext>
    
  </AuthProvider>,
)
