
export type Product = {
  _id?: string
  category: string
  name: string
  price: number
  imageLink: string
  description: string 
}

export type User = {    
  _id: string
  address: string  
  email: string
  name: string  
  password: string
  phone: string  
}

export type OrderItem = {
  _id: string
  category: string
  name: string
  price: number
  imageLink: string
  description: string
  total: string
  grandTotal: string
}

export type UserId =  {
  _id?: string;
  category: string;
  name: string;
  price: number;
  imageLink: string;
  description: string;
  userId?:string | null;
  quantity?: number
}

export interface InitialState{
  products: Product[],
  product:Product[],
  cart:Product[],
  order:CartItem[],
  userinfo:User[]
}

export type CartItem = {
  _id?: string,
  name: string,
  imageLink: string,
  quantity: number,
  price: number,
  category: string,
  description: string
}

export type FetchProductAction = {
  type: 'FETCH_PRODUCT';
  payload: Product[];
};
export type GetCartListAction = {
  type: 'GET_CART_LIST';
  payload: CartItem[];
};
export type GetOrderListAction = {
   type: 'GET_ORDER_LIST';
  payload: OrderItem[] 
}
export type AddToCartListAtion ={ 
  type: 'ADD_CART_LIST', 
  payload: Product 
}
export type GetUserInfo = {
   type: 'GET_USER_INFO',
   payload: User
   }

export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const ADD_PRODUCT_DETAIL = 'ADD_PRODUCT_DETAIL';
export const ADD_PRODUCT=  'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const REMOVE_PRODUCT=  'REMOVE_PRODUCT';


export const FetchProduct = 'fetchProduct'
export const FetchProductById = 'fetchProductById'
export const AddProduct = 'addProduct'
export const RemoveProduct = 'removeProduct'
export const SearchProduct = 'searchProduct'
export const AddFavorite = 'addFavorite'
export const RemoveFavorite = 'removeFavorite'
export const FetchUserById = 'fetchUserById'
export const RemoveUserData = 'removeUserData'

export const AddProductToCart = 'addProductToCart'
export const RemoveProductToCart = 'removeProductToCart'
export const AddProductQuantity = 'addProductQuantity'
export const RemoveProductQuantity = 'removeProductQuantity'
export const AddProductRecently = 'addProductRecently'

