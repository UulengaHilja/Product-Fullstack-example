import { Router } from "express";
import passport from "passport";

import {
  createUser,
  logInWithPassword,
  getUserById,
  updateUserController,
} from "../controllers/users";

const router = Router();

router.post("/users", createUser);
router.get("/users/:id", getUserById);

router.post("/login", logInWithPassword);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateUserController
);

export default router;