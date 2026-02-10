
import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';

const ProductCard = ({ products }) => {


    return (


        <>

            {products.map((items) => {
                return <div
                    className='flex flex-col justify-between rounded-lg border shadow-md border-gray-200 min-h-[450px] p-3 space-y-3 '
                    id={items.id}>

                    {/* Image Div */}
                    <div className='h-60 w-full rounded-lg overflow-hidden mb-5 '>
                        <img src={items.image} alt={items.title} className='h-full w-full bg-gray-200 p-3 object-contain' />
                    </div>



                    {/* Product Name */}
                    <span className='text-lg text-gray-800 font-bold '>{items.title}</span>

                    {/* Product Rating*/}
                    <div className='flex justify-between items-center  text-sm text-gray-700 font-[700]'>
                        <span>{`Rating : ${items.rating.rate} `}</span>
                        <span>{`Count : ${items.rating.count}`}</span>
                    </div>

                    {/* Product Description */}
                    <div className='text-sm'>
                        <p className='line-clamp-4'>{items.description}</p>
                    </div>


                    {/* Div contain product price and button */}
                    <div className='flex  justify-between mt-3 '>

                        {/* Product Price */}
                        <p className='text-2xl lg:text-3xl  font-bold'>$ {items.price}</p>


                        {/*Add to Cart Button */}
                        <Link to={'/product/' + items.id}>
                            <Button text="Add to Cart" bg="bg-gray-800 hover:bg-black text-white" />
                        </Link>

                    </div>


                </div>
            })}

        </>
    )
}

export default ProductCard
