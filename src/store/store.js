import {legacy_createStore as createStore,combineReducers,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
import { productListReducer } from "./reducers/productReducers"

const rootReducer=combineReducers({
    // orderList:orderListReducer,
    productList:productListReducer
})

// const cartItemsFromStorage=localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
// const userInfoFromStorage=localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
// const shippingAddressFromStorage=localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {}


const initialState={
    // user:{userInfo:userInfoFromStorage},
}

const middleware=[thunk]

const store=createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store
// yarn add redux react-redux redux-thunk redux-devtools-extenstion