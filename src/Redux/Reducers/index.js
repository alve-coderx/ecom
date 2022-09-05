import { combineReducers } from "redux";
import {productReducer,selectedProductsReducer} from './productReducers'
import { cartReducer } from "./cartReducers";

const rootReducer = combineReducers({
    allProducts : productReducer,
    product: selectedProductsReducer,
    cartItem : cartReducer

})

export default rootReducer;