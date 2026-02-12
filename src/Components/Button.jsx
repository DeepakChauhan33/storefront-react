import React from 'react'

const Button = ({ text, bg }) => {

  return (
    <button 
    className={`px-3 py-3 min-w-30 w-full  lg:w-[50%] rounded-sm cursor-pointer  ${bg} transition-colors duration-300 ease-in-out`}
    >
      {text}
    </button>
  )
}

export default Button
