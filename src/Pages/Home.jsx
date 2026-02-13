import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Components/CategoryCard';
import ProductCard from '../Components/ProductCard';
import Loader from '../Components/Loader';


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

            <section className='  flex items-center justify-start p-10'>





                <div className='flex flex-col justify-center items-start w-1/2 bg-red-300 text-center p-4'>
                    <h3 className='text-3xl font-bold '>
                        Elevate your Lifestyle

                    </h3>


                    <p className='flex'>
                        Your New Everyday Style
                    </p>

                    <button className='textxl font-black'>
                        See Work
                    </button>
                </div>

                <div className='w-1/2'>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png" alt="" />
                </div>
            </section>



            <section className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-gray-200/50 ">
                
                <div className="bg-white rounded-xl shadow-md p-4 h-110 cursor-pointer hover:scale-105 transition-transform duration-300 ">
                    {allProduct.length > 0 ? <Card heading="Men's Clothing" product={menCloths} /> : <Loader size={80}/>}
                </div>

                <div className="bg-white rounded-xl shadow-md p-4 h-110 cursor-pointer hover:scale-105 transition-transform duration-300">
                    {allProduct.length > 0 ? <Card heading="Women's Clothing" product={womenCloths} /> : <Loader size={80}/>}
                </div>

                <div className="bg-white rounded-xl shadow-md p-4 h-110 cursor-pointer hover:scale-105 transition-transform duration-300">
                    {allProduct.length > 0 ? <Card heading="Electronics" product={electronics} /> : <Loader size={80}/>}
                </div>

                <div className="bg-white rounded-xl shadow-md p-4 h-110 cursor-pointer hover:scale-105 transition-transform duration-300">
                    {allProduct.length > 0 ? <Card heading="Jewellery" product={jewellery} /> : <Loader size={80}/>}
                </div>
            </section>


            <section className='bg-[#f8fafcf0] space-y-6 px-6 py-10'>
                <p className='text-2xl font-semibold'>See more products here</p>

                <div className=' grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6'>
                    {allProduct.length > 0 ? <ProductCard products={allProduct} /> : <Loader size={50}/>}
                </div>

                
            </section>


        </>
    )
}

export default Home
