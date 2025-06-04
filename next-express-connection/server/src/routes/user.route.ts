import { Router } from "express";
import { apiController } from "../controllers/user.controller.ts";

const router = Router();

router.get("/api/home", apiController);

export const userRoutes = router;