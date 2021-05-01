import { Request, Response } from "express";

class AuthController {
  index(req: Request, res: Response): Response {
    return res.status(200).send("");
  }
  create(req: Request, res: Response): Response {
    return res.status(201).send("");
  }
}

export default new AuthController();
