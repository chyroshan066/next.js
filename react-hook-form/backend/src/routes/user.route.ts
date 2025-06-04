import { Router } from "express";
import { formController } from "../controllers/user.controller.ts";

const router = Router();

router.post("/form", formController);

export const userRoutes = router;