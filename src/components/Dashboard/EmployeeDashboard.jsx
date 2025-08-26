import React from 'react'
import Header from '../others/Header'
import Task_number from '../others/Task_number'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <Task_number data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard