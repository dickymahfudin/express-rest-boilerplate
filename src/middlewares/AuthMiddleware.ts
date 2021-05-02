import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  if (!req.headers.authorization) {
    return res.status(401).send("Not Authenticated");
  }
  const secretKey: string = process.env.JWT_SECRET_KEY || "dism";
  const token: string = req.headers.authorization.split(" ")[1];

  try {
    const crential: string | object = jwt.verify(token, secretKey);
    if (crential) {
      req.app.locals.credential = crential;
      return next();
    }
    return res.send("token invalid");
  } catch (error) {
    return res.send(error);
  }
};
