import React from 'react'

const Button = ({ text, bg }) => {

  return (
    <button 
    className={`px-3 py-2 min-w-30 cursor-pointer rounded-md ${bg} transition-colors duration-300 ease-in-out`}
    >
      {text}
    </button>
  )
}

export default Button
