import React from 'react'
import Header from '../others/Header'
import Task_number from '../others/Task_number'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div>
        <div className='p-10 bg-[#1c1c1c] h-screen '>
          <h1>{data.name}</h1>
            <Header />
            <Task_number/>
            <TaskList/>

        </div>
    </div>
  )
}

export default EmployeeDashboard