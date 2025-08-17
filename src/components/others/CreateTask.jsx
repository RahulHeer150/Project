import React from 'react'

const CreateTask = () => {
  return (
    <div>
         <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form className='flex flex-wrap w-full  justify-between items-start' >
            <div className='w-1/2'>
                 <div>             
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input type="text" placeholder='Make a Task' id="" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300'/>
                 </div>
                  <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input type="date" name="" id="" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300' />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input type="text" placeholder='Enter' id="" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300'/>
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input type="text" placeholder='Design, Dev etc.' id="" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300' />
            </div>

            </div>
           
            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea name="" id="" cols="30" rows="10" className='w-full h-44 py-2 px-4 text-sm  rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>
            </div>
           
            
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>

        </form>
       </div>
    </div>
  )
}

export default CreateTask