import React from 'react'

const Login = () => {
  const handlSubmit=()=>{
    e.preventDefault();
    console.log("form submitted")

  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl '>
            <form onSubmit={(e)=>{handlSubmit(e)}} className='flex flex-col items-center justify-center'>
                <input required type="email" className=' text-xl text-black outline-none bg-transparent border-2 border-emerald-600  px-3 py-5 rounded-full placeholder:text-gray-400' placeholder='enter your email' />
                <input required type="password" placeholder='enter password' className=' mt-3 text-xl text-black outline-none bg-transparent border-2 border-emerald-600  px-3 py-5 rounded-full placeholder:text-gray-400' />
                <button type='submit' onSubmit={handlSubmit} className='  text-xl mt-5 text-white outline-none bg-emerald-600 border-2  px-4 py-5 rounded-full'><b>Login</b></button>
            </form>
        </div>
    </div>
  )
}

export default Login