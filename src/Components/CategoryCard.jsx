import React from 'react'

const Card = ({ product, heading }) => {

  return (
    <div className=' text-center text-xl font-semibold'>
      <h2 className='py-3'>{heading}</h2>


      <div className=' grid grid-cols-2 grid-rows-2 justify-items-center gap-4'>
        {product.slice(0, 4).map((item) => {
          return <div className='h-auto ' id={item.id }>
            <div className='h-40 p-2 shadow-lg'>
              <img src={item.image} alt={item.title} className='object-contain h-full' />
            </div>
          </div>

        })}
      </div>

    </div>
  )
}

export default Card
