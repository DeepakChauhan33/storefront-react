import React from 'react'

const ProductCard = ({ products }) => {


    return (


        <>

            {products.map((items) => {
                return <div 
                className='border min-h-[450px] p-2'
                id={items.id}>

                    {/* Image Div */}
                    <div className='h-50 w-full'>
                        <img src={items.image} alt={items.title}  className='h-full w-full object-contain'/>
                    </div>

                    {/* Product Price */}
                    <p className='mt-3'>{items.price}</p>

                    {/* Product Name */}
                    <span>{items.title}</span>

                    {/* Product Rating*/}
                    <div className='flex justify-between items-center'>
                        <span>{`Rating : ${items.rating.rate}`}</span>
                        <span>{`Count : ${items.rating.count}`}</span>
                    </div>

                    {/* Product Description */}
                    <div>
                        <p>{items.description}</p>
                    </div>



                </div>
            })}

        </>
    )
}

export default ProductCard
