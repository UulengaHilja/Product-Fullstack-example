import { Router } from "express";
import passport from "passport";

import {
  createCart,
  getCart  
} from "../controllers/carts";

const router = Router();

router.post("/cart", createCart);

router.get("/cart/:userId", getCart);


export default router;