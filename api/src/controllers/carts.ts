// product controller here
import { Request, Response, NextFunction } from 'express'
import { MongoClient, ObjectId } from 'mongodb';
import CartModel from "../models/Cart";
import dotenv from "dotenv";
import CartService from "../services/cart";
dotenv.config()

export const createCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = new CartModel(req.body);

  try {
    const newProduct = await CartService.createCartService(product);
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

export const getCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newProduct = await CartService.getCartListService(req.params.userId);
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
