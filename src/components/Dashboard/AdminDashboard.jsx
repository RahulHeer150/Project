import React from 'react'
import Header from '../others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen p-10 w-full'>
        <Header/>

       <div>
        <form className='flex justify-between items-start mt-5' >
            <div>             
                <h3>Task Title</h3>
                <input type="text" placeholder='Make a Task' id="" />
            </div>
            <div>
                <h3>Description</h3>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <h3>Date</h3>
                <input type="date" name="" id="" />
            </div>
            <div>
                <h3>Assign to</h3>
                <input type="text" placeholder='Enter' id="" />
            </div>
            <div>
                <h3>Category</h3>
                <input type="text" placeholder='Design, Dev etc.' id="" />
            </div>
            
            <button>Create Task</button>

        </form>
       </div>
    </div>
  )
}

export default AdminDashboard