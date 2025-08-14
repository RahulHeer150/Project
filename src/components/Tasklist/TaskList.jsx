import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] items-center justify-start gap-5 flex flex-nowrap w-full bg-sky-500 mt-10 py-5 overflow-x-auto'>
        <div className='h-full flex-shrink-0  w-[600px] bg-emerald-400 rounded-xl mx-5'></div>
        <div className='h-full flex-shrink-0  w-[600px] bg-emerald-400 rounded-xl mx-5'></div>
        <div className='h-full flex-shrink-0  w-[600px] bg-emerald-400 rounded-xl mx-5'></div>
        <div className='h-full flex-shrink-0  w-[600px] bg-emerald-400 rounded-xl mx-5'></div>

    </div>
  )
}

export default TaskList