import React from 'react'

const Signup = () => {
  return (
    <>

      <div className='w-full p-8 md:p-10 lg:p-12 xl:p-15 flex flex-col justify-center items-center space-y-5 '>

      <h2 className='text-3xl font-semibold'>Login</h2>

        <form className='w-full md:w-[60%]  lg:w-1/2 shadow-lg shadow-gray-400 p-6 rounded-md space-y-3'>

          {/* FOR EMAIL */}
          <div className='flex flex-col gap-y-3  p-2 rounded-md '>
            <label className='text-lg font-normal' htmlFor="email">Email</label>
            <input
              className='p-3 md:p-4  px-2 outline-none border rounded-md transition focus:border-blue-600 duration-400'
              type="email"
              id='email'
              placeholder='Email' />
          </div>


          {/* FOR PASSWORD */}
          <div className='flex flex-col gap-y-3  p-2 rounded-md '>
            <label className='text-lg font-normal' htmlFor="password">Password</label>
            <input
              className='p-3 md:p-4  px-2 outline-none border rounded-md transition focus:border-blue-600 ease-in-out duration-400 '
              type="password"
              id='password'
              placeholder='Password' />
          </div>





          {/* Forgot Password */}
          <div className="text-right text-sm mb-5">
            <button
              type="button"
              className="text-gray-500 hover:text-black"
            >
              Forgot Password?
            </button>
          </div>


          {/* For Submit Button */}
          <div>
            <button
              className="w-full bg-black text-white py-2 lg:py-3 rounded-lg hover:bg-gray-900 transition"
            >
              login
            </button>
          </div>


        </form>


      </div>

    </>
  )
}

export default Signup
