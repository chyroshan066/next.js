import { Request, Response } from "express";

export const apiController = (req: Request, res: Response) => {
    res.json({ message: "Heh dil ye mera!" });
}