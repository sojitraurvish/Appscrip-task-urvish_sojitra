
import { PRODUCT_LIST_ACTION_TYPES } from "../constants/productConstants"

const PRODUCT_LIST_REDUCER_INITIAL_STATE={
    products:[],loading:true,error:null
}


export const productListReducer=(state=PRODUCT_LIST_REDUCER_INITIAL_STATE,action)=>{
    const {type,payload}=action
    switch(type){
        case PRODUCT_LIST_ACTION_TYPES.PRODUCT_LIST_REQUEST:
            return {...state,loading:true,products:[]}
        case PRODUCT_LIST_ACTION_TYPES.PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading:false,
                products:payload,
                // pages:payload.pages,
                // page:payload.page
            }
        case PRODUCT_LIST_ACTION_TYPES.PRODUCT_LIST_FAIL:
            return {...state,loading:false,error:payload}
        default:
            return state
    }
}