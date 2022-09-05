import { useSelector } from "react-redux";
import { ActionTypes } from "../Types/Action-types";

const initialState = {
    cart : [],
    cartItems : null
}


export const cartReducer = (state=initialState, { type, payload , allproducts} ) => {
    switch (type) {
      case ActionTypes.ADD_TO_CART:
        const item = allproducts.find((prod) => prod._id === payload._id);
        const isInCart  = state.cart.find((item) => 
          item._id === payload._id ? true : false
        )
        localStorage.setItem("cart",JSON.stringify(state.cart))
        return {
            ...state,
            cart : isInCart 
            ? state.cart.map((item) => 
              item._id === payload._id 
                ? {...item,qty : item.qty + 1}
                : item
            )            
            : [...state.cart,{...item,qty:1}]

          
        } ;
      case ActionTypes.REMOVE_TO_CART:
        const rmvitm = state.cart.filter((item) => item._id !== payload.id)
        localStorage.removeItem("cart",JSON.stringify(rmvitm))

        return {
            ...state,
            cart: state.cart.filter(item=> item._id !== payload.id)

        } ;
      // case ActionTypes.ADJUST_QTY:
      //   return {
      //     ...state,
      //     cart : state.cart.map(item => item._id === payload._id ? {...item,qty:payload.qty} : item)
      //   } ;
      // case ActionTypes.LOAD_CURRENT_ITEM:
      //   return {
      //     ...state,
      //     currentItem : payload
      //   } ;
      default:
        return state;
    }
  };