import {ActionTypes} from '../Types/Action-types';

export const addToCart = (product,products) => {
    return{
        type : ActionTypes.ADD_TO_CART,
        payload : product,
        allproducts : products
    };
};


export const removeFromCart = (itemID) => {
  return {
    type : ActionTypes.REMOVE_TO_CART,
    payload : {
      id : itemID
    }
  }
}



export const adjustQty = (itemID,value) => {
  return {
    type : ActionTypes.ADJUST_QTY,
    payload : {
      id : itemID,
      qty : value
    }
  }
}


export const loadCurrentItem = (item) => {
  return {
    type : ActionTypes.LOAD_CURRENT_ITEM,
    payload : item
  }
}