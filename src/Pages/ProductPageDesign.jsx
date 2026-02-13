import React from 'react'
import QuantityBtn from "../Components/QuantityBtn";
import Button from "../Components/Button";


// React Icons
import { FaShield } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { RiCashLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


const ProductPageDesign = ({ product }) => {


  // Calculate 10% increase in price
  function plusPercentageValue(num) {
    return 0.1 * num + num;
  }

  // Warranty information based on category
  function warrantyInfo(category) {
    if (category === "electronics") {
      return "2 years warranty";
    } else if (category === "jewelery") {
      return "1 year warranty";
    } else if (
      category === "men's clothing" ||
      category === "women's clothing"
    ) {
      return "6 month warranty";
    } else {
      return "No warranty information available";
    }
  }

  // Handle rating and return star symbols
  function handleRating(rate) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rate)) {
        stars += "★";
      } else {
        stars += "☆";
      }
    }
    return stars;
  }




  function addToWishList(){
    const wishlistCant = document.querySelector('.wishlistCant');
    wishlistCant.innerHTML=<span><FaHeart /></span>;
  }


  return (
    <>
      <div className="bg-gray-100/30  flex flex-col md:flex-row items-start mt-3  shadow-md space-x-4 p-2 md:p-5 lg:p-10">

        {/* Product Image Container */}
        <div className="w-full  md:w-[40%] rounded-lg overflow-hidden mb-5 ">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-90 md:h-full md:min-h-100 object-contain bg-gray-300 p-4"
          />
        </div>


        {/* Product Details Container */}
        <div className="flex flex-col w-full md:w-[60%] p-2 gap-y-5">


          <div className='flex  justify-between items-center'>
            {/* Product Title */}
            <p className="underline text-lg  md:text-2xl xl:text-3xl font-bold md:font-semibold">
              {product.title}
            </p>

            <div className='wishlistCant cursor-pointer flex items-start' title='Add to wishlist' onClick={()=>{
              addToWishList()
            }}>
              <CiHeart className='text-3xl ' />
            </div>
          </div>



          {/* Description */}

          <div className="">
            <h4 className="text-md font-semibold mb-2">Description</h4>

            <p className="text-sm lg:text-lg">{product.description}</p>
          </div>




          {/* Quantity Button */}
          <div className=''>
            <QuantityBtn />
          </div>




          {/* Price & Ratting */}
          <div className="flex  justify-between items-start lg:items-center  ">
            {/* Price */}
            <div className="space-x-2  ">

              <div className="flex items-center gap-3">
                <span className="text-md lg:text-xl text-red-500">-10%</span>

                <span className="text-2xl xl:text-3xl font-bold">${product.price}</span>
              </div>

              <div className="text-md lg:text-lg ">
                <span>{`M.R.P : $`}</span>
                <span className="line-through font-normal">
                  {plusPercentageValue(product.price)}</span>
              </div>
            </div>


            {/* Rating */}
            <div className="text-sm lg:text-lg">
              <span>{`${product.rating.rate} ${handleRating(product.rating.rate)} (${product.rating.count} reviews)`}</span>
            </div>

          </div>




          {/* Buy & Add to cart button */}
          <div className="space-x-2.5 space-y-3 lg:space-y-0 flex flex-col lg:flex-row">
            <Button
              text="Add to cart"
              bg="bg-blue-500 hover:bg-blue-600 text-white"
            />
            <Button
              text="Buy"
              bg="bg-green-500 hover:bg-green-600 text-white"
            />
          </div>




          {/* Shipping Details */}
          <div className="border border-gray-200 p-3 rounded-2xl space-y-2">
            <h4 className="text-md lg:text-xl font-semibold">Shipping</h4>

            <ul className="grid grid-cols-2 ">



              {/* Warranty Information */}
              <li className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg">
                <div className="text-gray-700-600 text-xl lg:text-2xl xl:text-3xl rounded-full p-3 bg-gray-400/30">
                  <FaShield />
                </div>

                <div>
                  <p className="font-semibold text-xs md:text-sm lg:text-md leading-none">
                    Warranty
                  </p>
                  <span className="text-xs text-gray-500">
                    {warrantyInfo(product.category)}
                  </span>
                </div>
              </li>




              {/*  Dilivery */}
              <li className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg">
                <div className="text-gray-700-600 text-xl lg:text-2xl xl:text-3xl rounded-full p-3 bg-gray-400/30">
                  <FaTruck />
                </div>

                <div>
                  <p className="font-semibold text-xs md:text-sm lg:text-md leading-none">
                    Delivery Time
                  </p>
                  <span className="text-xs text-gray-500">
                    4-5 working days
                  </span>
                </div>
              </li>





              {/* Return Policy */}
              <li className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg">
                <div className="text-gray-700-600 text-xl lg:text-2xl xl:text-3xl rounded-full p-3 bg-gray-400/30">
                  <TbTruckReturn />
                </div>

                <div>
                  <p className="font-semibold text-xs md:text-sm lg:text-md leading-none">
                    Return Policy
                  </p>
                  <span className="text-xs text-gray-500">
                    15 Days Return Policy
                  </span>
                </div>
              </li>




              {/*  Cash on Delivery */}
              <li className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg">
                <div className="text-gray-700-600 text-xl lg:text-2xl xl:text-3xl rounded-full p-3 bg-gray-400/30">
                  <RiCashLine />
                </div>

                <div>
                  <p className="font-semibold text-xs md:text-sm lg:text-md leading-none">
                    Cash on Delivery
                  </p>
                  <span className="text-xs text-gray-500">Available</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>



      <div>
        <h2>You might also like</h2>

        <div>
          {/* Similar products based on category */}

        </div>
      </div>

    </>
  )
}

export default ProductPageDesign
