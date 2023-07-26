import { Router } from "express";
import passport from "passport";

import {
  createOrder,
  getOrder  
} from "../controllers/orders";

const router = Router();

router.post("/order", createOrder);

router.get("/order/:userId", getOrder);


export default router;