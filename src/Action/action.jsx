import { LOGIN } from "./actionType";
import { GET_PRODUCTS } from "./actionType";
import axios from "axios";

export const loginAction = (val) => {

    console.log("called")
    return {
        type : LOGIN,
        payload : val
    }
}   




export const getProducts=()=>{
    return async (dispatchEvent)=>{
        try {
            let respose = await axios.get("https://fakestoreapi.com/products")
            dispatchEvent({type:GET_PRODUCTS, payload:respose.data})
        } catch (error) {
            console.log(error);
        }
    
    }
}