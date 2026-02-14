import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Components/Loader";
import ProductPageDesign from "./ProductPageDesign";


const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchApi();
  }, [params.pd_id]);

  // fetch product details from api
  async function fetchApi() {
    try {
      let response = await axios.get(
        `https://fakestoreapi.com/products/${params.pd_id}`,
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      {product ? (
             <ProductPageDesign product={product} /> ) : (
        <Loader />
      )}
    </>
  );
};

export default ProductPage;
