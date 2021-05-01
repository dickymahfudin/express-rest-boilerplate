import { Request, Response } from "express";
import IController from "./ControllerInterface";

let data: any[] = [
  { id: 1, name: "dism1" },
  { id: 2, name: "dism2" },
  { id: 3, name: "dism3" },
  { id: 4, name: "dism4" },
];

class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.status(200).send(data);
  }
  create(req: Request, res: Response): Response {
    const { id, name } = req.body;
    data.push({ id, name });
    return res.status(201).send("success");
  }
  show(req: Request, res: Response): Response {
    const { id } = req.params;
    const person = data.find((item) => item.id === id);
    return res.status(200).send(person);
  }
  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;
    let person = data.find((item) => item.id === id);
    person.name = name;
    return res.status(204).send("success");
  }
  delete(req: Request, res: Response): Response {
    throw new Error("method not Implemented");
  }
}

export default new UserController();
