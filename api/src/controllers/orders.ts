// product controller here
import { Request, Response, NextFunction } from 'express'
import { MongoClient, ObjectId } from 'mongodb';
import OrderModel from "../models/Order";
import dotenv from "dotenv";
import OrderService from "../services/order";
dotenv.config()

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {        
    //  const product = new OrderModel(req.body);     
  try {
    for(const item of req.body){
        const product = new OrderModel(item);
         await OrderService.createOrderService(product);
    }    
    
    res.status(200).json({message: "product added"});
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: false,
      message: 'Failed to add product detail',
    });
    next(error)
  }
}

export const getOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newProduct = await OrderService.getOrderList(req.params.userId);
    res.status(200).json(newProduct);
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: false,
      message: 'Failed to add product detail',
    });
    next(error)
  }
}
