// product controller here
import { Request, Response, NextFunction } from 'express'
import { MongoClient, ObjectId } from 'mongodb';
import ProductModel from "../models/Product";
import dotenv from "dotenv";
import ProductService from "../services/product";
dotenv.config()

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = new ProductModel(req.body);

  try {
    const newProduct = await ProductService.createProductService(product);
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

export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newProduct = await ProductService.getProductList();
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

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productid = req.params.id;

  try {
    const newProduct = await ProductService.getProductByIdService(productid);
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

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productId = req.params.id;
  const updatedProduct = req.body;

  try {
    const objectId = new ObjectId(productId);
    const newProduct = await ProductService.updateProductByIdService(productId, updatedProduct);
    res.status(200).json(newProduct);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: 'Failed to update product',
    });
    next(error)
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productId = req.params.id;

  try {
    const newProduct = await ProductService.deleteProductByIdService(productId);
    res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: 'Failed to delete product',
    });
    next(error)
  }
}
