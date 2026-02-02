import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({size}) => {
  return (
    <div className='w-full  flex justify-center items-center'>
         <ClipLoader size={size}  />
    </div>
  )
}

export default Loader
