import { Request, Response } from "express";

export const formController = (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
    res.send("Form sent successfully");
}