import { LOGIN } from "./actionType";

export const loginAction = (val) => {

    console.log("called")
    return {
        type : LOGIN,
        payload : val
    }
}   