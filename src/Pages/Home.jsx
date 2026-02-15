import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Components/CategoryCard';
import ProductCard from '../Components/ProductCard';
import Loader from '../Components/Loader';
import { Link } from 'react-router-dom';


const Home = () => {

    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        fetchApi();
    }, []);



    async function fetchApi() {

        try {
            let respose = await axios.get("https://fakestoreapi.com/products")
            setAllProduct(respose.data);

        } catch (error) {
            console.log(error);
        }
    }




    const menCloths = allProduct.filter((item) => item.category === "men's clothing");
    const womenCloths = allProduct.filter((item) => item.category === "women's clothing");
    const electronics = allProduct.filter((item) => item.category === "electronics");
    const jewellery = allProduct.filter((item) => item.category === "jewelery");









    return (
        <>

            <section 
            className='h-screen bg-[url(https://plus.unsplash.com/premium_photo-1760574612930-79d88fd52ce6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat bg-center lg:bg-right  flex  justify-center items-center md:justify-start lg:items-center  lg:justify-start p-5 lg:p-10'>


                <div className='  max-w-xl space-y-6 '>
                    <h1 className='text-3xl md:text-4xl lg:text-7xl font-extrabold'>Discover Style. <br></br>Define Yourself.</h1>
                    <p className='text-gray-800 text-md  md:text-xl lg:text-2xl font-normal'>Minimal fashion for the modern world. Curated pieces that speak volumes through simplicity.</p>
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">Shop Now</button>
                </div>



                
            </section>



            <section className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-8 p-3 md:p-6 lg:p-8 pb-6 bg-gray-200/50 ">
                
                <Link to ={`/product'+ ${menCloths}`}>
                <div className="bg-white rounded-xl shadow-md p-2 lg:p-4 h-110 cursor-pointer hover:scale-105 transition-transform duration-300 ">
                    {allProduct.length > 0 ? <Card heading="Men's Clothing" product={menCloths} /> : <Loader size={80}/>}
                </div>
                </Link>

                <div className="bg-white rounded-xl shadow-md p-2 lg:p-4 h-110 cursor-pointer hover:scale-105 transition-transform duration-300">
                    {allProduct.length > 0 ? <Card heading="Women's Clothing" product={womenCloths} /> : <Loader size={80}/>}
                </div>

                <div className="bg-white rounded-xl shadow-md p-2 lg:p-4 h-110 cursor-pointer hover:scale-105 transition-transform duration-300">
                    {allProduct.length > 0 ? <Card heading="Electronics" product={electronics} /> : <Loader size={80}/>}
                </div>

                <div className="bg-white rounded-xl shadow-md p-2 lg:p-4 h-110 cursor-pointer hover:scale-105 transition-transform duration-300">
                    {allProduct.length > 0 ? <Card heading="Jewellery" product={jewellery} /> : <Loader size={80}/>}
                </div>
            </section>


            <section className='bg-[#ffffff] space-y-6 px-2 lg:px-6 py-10 scrolling-smooth'>
                <p className='text-2xl font-semibold'>See more products here</p>

                <div className=' grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6'>
                    {allProduct.length > 0 ? <ProductCard products={allProduct} /> : <Loader size={50}/>}
                </div>

                
            </section>




        </>
    )
}

export default Home
