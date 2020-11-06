import { Router } from "express";
import { player } from "../controllers/userController.js";
import { signUp, signIn, signOut } from "../controllers/authController.js";

const router = Router();

router.get("/player", player);
router.get("/signup", signUp);
router.get("/signin", signIn);
router.get("/signout", signOut);

export default router;
