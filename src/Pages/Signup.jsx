import React from 'react'

const Signup = () => {
  return (
    <>

      <div className='w-full p-15 flex justify-center items-center '>


        <form className='w-1/2 border p-6 rounded-sm space-y-3'>

          {/* FOR EMAIL */}
          <div className='flex flex-col gap-y-3  p-2 rounded-md '>
            <label className='text-lg font-normal' htmlFor="email">Email</label>
            <input
              className='py-5 px-2 outline-none border rounded-md transition focus:border-blue-600 duration-400'
              type="email"
              id='email'
              placeholder='Email' />
          </div>


          {/* FOR PASSWORD */}
          <div className='flex flex-col gap-y-3  p-2 rounded-md '>
            <label className='text-lg font-normal' htmlFor="password">Password</label>
            <input
              className='py-5 px-2 outline-none border rounded-md transition focus:border-blue-600 ease-in-out duration-400 '
              type="password"
              id='password'
              placeholder='Password' />
          </div>





          {/* Forgot Password */}
          <div className="text-right text-sm">
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
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
            >
              Log in
            </button>
          </div>


        </form>


      </div>

    </>
  )
}

export default Signup
