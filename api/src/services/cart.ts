import { NotFoundError } from "./../helpers/apiError";
import Cart, { CartDocument } from "../models/Cart";
import { ObjectId } from "mongoose";

const createCartService = async (
  product: CartDocument
): Promise<CartDocument> => {
  return await product.save();
};

const getCartListService = async (userId:any): Promise<CartDocument[]> => {
  return await Cart.find({userId: userId});
};


export default {createCartService, getCartListService }