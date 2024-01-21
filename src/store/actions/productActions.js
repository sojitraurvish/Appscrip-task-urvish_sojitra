import  {PRODUCT_LIST_ACTION_TYPES} from "../constants/productConstants"
import axios from "axios"


export const listProducts=()=>async(dispatch)=>{
    try {
        dispatch({type:PRODUCT_LIST_ACTION_TYPES.PRODUCT_LIST_REQUEST})
        
        const {data}=await axios.get(`https://fakestoreapi.com/products`)


        dispatch({
            type:PRODUCT_LIST_ACTION_TYPES.PRODUCT_LIST_SUCCESS,
            payload:data
        })


    } catch (error) {
        dispatch({
            type:PRODUCT_LIST_ACTION_TYPES.PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message 
            : error.message
        })        
    }
}