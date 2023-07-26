import {
  Product,
  User,
  InitialState,
  CartItem,
  OrderItem,
  UserId,
} from "../../type/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {
  products: [],
  product: [],
  cart: [],
  order: [],
  userinfo: [],
};

const productReducer = (
  state = initialState,
  action: {
    type: string;
    payload:
      | Product
      | UserId
      | Product[]
      | UserId[]
      | OrderItem
      | OrderItem[]
      | CartItem
      | CartItem[]
      | User
      | string
      | null
      | any;
  }
) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      console.log("action.payload", action.payload);
      return { ...state, products: action.payload };
    case "ADD_PRODUCT_DETAIL":
      console.log("action pay load product detail", action.payload);
      console.log("state", state);
      return { ...state, product: action.payload };
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };
    case "ADD_CART_LIST":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "GET_CART_LIST":
      return {
        ...state,
        cart: action.payload,
      };
    case "GET_ORDER_LIST":
      return {
        ...state,
        order: action.payload,
      };
    case "GET_USER_INFO":
      console.log("action.payload", action.payload);
      return {
        ...state,
        userinfo: [action.payload],
      };
    default:
      return state;
  }
};

export default productReducer;
