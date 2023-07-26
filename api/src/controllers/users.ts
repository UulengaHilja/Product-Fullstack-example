import { NextFunction, Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/User";
import UserServices from "../services/users";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("req user signup", req.body);
    const userInformation = new User(req.body);
    const newUser = await UserServices.createUserService(userInformation);
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
// log in
export const logInWithPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // logic
    // find user by email
    const userData = await UserServices.findUserByEmail(req.body.email);
    if (!userData) {
      res.status(403).json({ message: "user do not have account yet" });
      return;
    }
    // token
    // sign : 3
    // 1.payload
    // 2. JWT
    // 3. expire time: 1h, 1m, 1s
    const token = jwt.sign(
      {
        // email and password
        // never use password
        // firstName, lastName
        email: userData.email,
        _id: userData._id,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
  // userDat will contains user Details also email and password
    res.json({  token:token,userData });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {  
    console.log("req.params.id", req.params.id)
    const userData = await UserServices.findUserById(req.params.id);
    if (!userData) {
      res.status(403).json({ message: "user do not have account yet" });
      return;
    }       
    res.json({userData});
  } catch (error) {
    next(error);
  }
};

// update
export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const update = req.body;
  const userId = req.params.id;
  const updatedUser = await UserServices.updateUser(userId, update);
  res.json(updatedUser);
};