import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Components/Loader';
import QuantityBtn from '../Components/QuantityBtn';

const ProductPage = () => {


    const params = useParams();
    const [product, setProduct] = useState(null);




    useEffect(() => {
        fetchApi();
    }, [params.pd_id]);



    async function fetchApi() {

        try {
            let response = await axios.get(`https://fakestoreapi.com/products/${params.pd_id}`)
            setProduct(response.data);

        } catch (error) {
            console.log(error);
        }
    }


    function plusPercentageValue(num) {

        return 0.1 * num + num;
    }



    function warrantyInfo(category) {

        if (category === "electronics") {
            return "2 years warranty";
        } else if (category === "jewelery") {
            return "1 year warranty";
        } else if (category === "men's clothing" || category === "women's clothing") {
            return "6 month warranty";
        } else {
            return "No warranty information available";
        }
    }


    function handleRating(rate) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rate)) {
                stars += '★';
            } else {
                stars += '☆';
            }
        }
        return stars;
    }


    return (
        <>
            {product ?

                <div className='flex flex-col md:flex-row items-center rounded-lg shadow-md space-x-4  p-10'>

                    <div className='w-full md:w-1/3 border '>
                        <img src={product.image} alt={product.title} className='w-full  bg-gray-300 p-4' />
                    </div>

                    <div className='flex flex-col w-full border p-4'>
                        <p className='text-md  md:text-2xl font-semibold'>
                            {product.title}
                        </p>


                        <div>
                            <span>{`${product.rating.rate} ${handleRating(product.rating.rate)} (${product.rating.count} reviews)`}</span>
                        </div>




                        <p>
                            {product.description}
                        </p>

                        <div className='space-x-2'>

                            <span className='text-red-500'>
                                -10%
                            </span>

                            <span className='text-2xl font-bold'>
                                ${product.price}
                            </span>

                        </div>



                        <div>
                            <span>{`M.R.P : $`}</span>
                            <span className='line-through'>{plusPercentageValue(product.price)}</span>
                        </div>


                        <div>
                            <QuantityBtn/>
                        </div>


                        <div>
                            <button className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2'>Add to Cart</button>
                            <button className='bg-green-500 text-white px-4 py-2 rounded-md'>Buy Now</button>
                        </div>



                        <p>
                            {warrantyInfo(product.category)}
                        </p>


                    </div>


                </div>

                : <Loader />}
        </>
    )
}

export default ProductPage
