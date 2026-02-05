import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Components/Loader';

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
            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    }


    function plusPercentageValue(num){

        return 0.1*num + num;
    }



    function warrantyInfo(category){

        if(category === "electronics"){
            return "2 years warranty";
        }else if(category === "jewelery"){
            return "1 year warranty";
        }else if(category === "men's clothing" || category === "women's clothing"){
            return "6 month warranty";
        }else{
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
            {product ? <p>{

                <div className='flex justify-center p-10'>

                    <div className='w-1/3 border'>
                        <img src={product.image} alt={product.title} className='bg-gray-300 p-4' />
                    </div>

                    <div className='flex flex-col w-full border p-4'>
                        <p className='text-2xl font-semibold'>
                            {product.title}
                        </p>

                        <span>{product.rating.rate} {`(${product.rating.count} reviews)`}</span> <span>{handleRating(product.rating.rate)}</span>


                        <p>
                            {product.category}
                        </p>
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

                            <p className='line-through'>{`M.R.P : $ ${plusPercentageValue(product.price)} `}</p>


                            <p>
                                {warrantyInfo(product.category)}
                            </p>

                        </div>
                    </div>


                </div>

            }</p> : <Loader />}
        </>
    )
}

export default ProductPage
