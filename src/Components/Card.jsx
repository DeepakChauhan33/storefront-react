import React from 'react'

const Card = ({product, heading}) => {

  return (
    <div className='border'>
      <h2>{heading}</h2>

      {console.log(product)}

      <div className='border grid grid-cols-2 grid-rows-2'>
        {product.slice(0,4).map((item)=>{
          return <div>
            <img src={item.image} alt={item.title} className='object-cover' />
          </div>
        })}
      </div>
      
    </div>
  )
}

export default Card
