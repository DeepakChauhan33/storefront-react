import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center px-10 w-full p-5 border bg-black shadow-2xl '>

                {/* LOGO */}
                <div className='flex'>
                    <img
                        src="data:image/png;base64,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"
                        alt="logo"
                        className="h-10 w-auto"
                    />
                </div>

                {/* NAVIGATION */}
                <nav className=''>
                    <ul className='flex space-x-15 text-white'>
                        <li className='text-xl font-normal cursor-pointer'>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li className='text-xl font-normal cursor-pointer'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className='text-xl font-normal cursor-pointer'>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li className='text-xl font-normal cursor-pointer'>
                            <Link to='/signIn'>Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar