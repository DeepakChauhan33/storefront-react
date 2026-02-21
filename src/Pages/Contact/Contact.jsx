import React from 'react'
import ContactFrom from './ContactFrom'

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full py-10 gap-5'>
      <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
      <div className='w-1/2'>
        <ContactFrom/>
      </div>
    </div>
  )
}

export default Contact
