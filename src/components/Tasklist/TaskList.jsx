import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] items-center justify-start gap-5 flex flex-nowrap w-full bg-sky-500 mt-10 py-5 overflow-x-auto'>
        <div className='h-full flex-shrink-0  w-[300px] bg-emerald-400 rounded-xl mx-5 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded-md'>High</h3>
                <h4 className=''>20 Feb 2025</h4>
            </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a Youtube Clone!</h2>
        <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nam sed aliquid, voluptatibus ipsa odit.</p>
        </div>

    </div>
  )
}

export default TaskList