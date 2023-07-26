import * as api from '../thunk/product'; // Import the API service functions
import * as apiCart from '../thunk/cart';
import * as apiUser from '../thunk/user';
import * as apiOrder from '../thunk/order';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {CartItem, OrderItem, Product, User, UserId, FetchProductAction, GetCartListAction } from '../../type/types';
import { AppDispatch } from '../store';
// Define the type for the dispatched action
// type FetchProductAction = {
//   type: 'FETCH_PRODUCT';
//   payload: Product[];
// };

// interface FetchProductAction {
//   type: string;
//   payload: Product[]; // Replace 'Product[]' with the actual type of the payload
// }

// Define the type for the dispatched action
// type GetCartListAction = {
//   type: 'GET_CART_LIST';
//   payload: CartItem;
// };
// type GetOrderListAction = {
//    type: 'GET_ORDER_LIST';
//   payload: OrderItem[] 
// }
// type AddToCartListAtion ={ 
//   type: 'ADD_CART_LIST', 
//   payload: Product 
// }

// type GetUserINfo = {
//    type: 'GET_USER_INFO',
//    payload: User
//    }

export const  fetchProducts = ():ThunkAction<
Promise<void>,
Product[], // The type of the result that your async function returns
undefined, // Extra argument passed to the thunk (if any)
FetchProductAction // The type of the action that your thunk dispatches
> => {
   return async (dispatch:ThunkDispatch<Product[], undefined, FetchProductAction>):Promise<void> => {
    try {
      const products = await api.fetchProductsData();      
      dispatch({ type: 'FETCH_PRODUCT', payload: products });
    } catch (error) {
      console.log(error);
    }
  };
} 

export const addProductDetail = (product:Product[]) =>{
  return (dispatch:Dispatch)=>{
    try {
      console.log("products", product);
        dispatch({ type: 'ADD_PRODUCT_DETAIL', payload: product });
    } catch (error) {
      
    }
  }  
}

export const addToCartList =  (product:UserId) =>{
  return async (dispatch:Dispatch)=>{
    try {      
      console.log("products", product);
      const newProduct = await apiCart.createCart(product);
        dispatch({ type: 'ADD_CART_LIST', payload: product });
    } catch (error) {
      
    }
  }  
}

export const getOrderByUserId =  (userId:string):ThunkAction<
Promise<void>,
Product[], // The type of the result that your async function returns
undefined, // Extra argument passed to the thunk (if any)
FetchProductAction // The type of the action that your thunk dispatches
> =>{
  return async (dispatch:ThunkDispatch<Product[], undefined, GetCartListAction>)=>{
    try {      
      console.log("products", userId);
      const newProduct = await apiCart.getCart(userId);
        dispatch({ type: 'GET_CART_LIST', payload: newProduct });
    } catch (error) {
      
    }
  }  
}

export const fetchOrderByUserId =  (userId:string | null) =>{
  return async (dispatch:Dispatch)=>{
    try {      
      console.log("products", userId);
      const newProduct = await apiOrder.getOrder(userId);
        dispatch({ type: 'GET_ORDER_LIST', payload: newProduct });
    } catch (error) {
      
    }
  }  
}

export const fetchUserById =  (userId:string | null) =>{
  return async (dispatch:Dispatch)=>{
    try {      
      console.log("products", userId);
      const newProduct = await apiUser.fetchUserInfo(userId);
        dispatch({ type: 'GET_USER_INFO', payload: newProduct.userData });
    } catch (error) {
      
    }
  }  
}

export const addProduct = (product:Product) => 
{return  async (dispatch:Dispatch) => {
    try {
      const newProduct = await api.createProduct(product);
      dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
    } catch (error) {
      console.log(error);
    }
  };
}




