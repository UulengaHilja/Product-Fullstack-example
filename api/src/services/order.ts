import { NotFoundError } from "./../helpers/apiError";
import Order, { OrderDocument } from "../models/Order";
import { ObjectId } from "mongoose";

const createOrderService = async (
  product: OrderDocument
): Promise<OrderDocument> => {
    console.log("product", product)
  return await product.save();
};

const getOrderList = async (userId:any): Promise<OrderDocument[]> => {
  return await Order.find({userId: userId});
};


export default {createOrderService, getOrderList }