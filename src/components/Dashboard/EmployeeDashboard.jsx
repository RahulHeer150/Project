import React from 'react'
import Header from '../others/Header'
import Task_number from '../others/Task_number'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#1c1c1c] h-screen '>
            <Header />
            <Task_number/>
            <TaskList/>

        </div>
    </div>
  )
}

export default EmployeeDashboard