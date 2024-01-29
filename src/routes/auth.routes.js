import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.router.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

// POST ROUTES LOGIN
router.post("/register",validateSchema(registerSchema), register);

router.post("/login",validateSchema(loginSchema), login); 
router.post("/logout", authRequired ,logout);

// GET ROUTES LOGIN
router.get("/profile", authRequired, profile);
router.get("/verify", verifyToken);

export default router;