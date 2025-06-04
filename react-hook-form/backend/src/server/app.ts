import express from "express";
import cors from "cors";
import { userRoutes } from "../routes/user.route.ts";

export const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);