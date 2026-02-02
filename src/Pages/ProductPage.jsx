import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

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


    return (
        <>
            {product ? <p>{product.title}</p> : <p>Loading...</p>}
        </>
    )
}

export default ProductPage
