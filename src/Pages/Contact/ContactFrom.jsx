import React from 'react'

const ContactFrom = () => {
    return (

            
            <from 
                className="w-full border-2 border-gray-300 rounded-lg p-5 flex flex-col gap-5"
            >

                <div className='flex flex-col'>
                    <label htmlFor="Name">First Name</label>
                    <input
                        type="text"
                        placeholder='Enter your name'
                        name='Name'
                        id='FirstName'
                    />
                </div>


                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        name='email'
                        id='email'
                    />
                </div>


                <div className='flex flex-col'>
                    <label htmlFor="number">Phone Number</label>
                    <input
                        type="text"
                        placeholder='Enter your phone number'
                        name='number'
                        id='number'
                    />
                </div>


                <div className='flex flex-col'>
                    <label htmlFor="message">Message</label>
                    <textarea
                        placeholder='Enter your message'
                        name='message'
                        id='message'
                    />
                </div>


                

                <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Submit</button>

            </from>

    )
}

export default ContactFrom
