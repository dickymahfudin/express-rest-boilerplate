import { Request, Response } from "express";
import IController from "./ControllerInterface";
import TodoService from "../services/TodoService";
class TodoController implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todos = await service.getAll();

    return res.status(200).send(todos);
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.store();

    return res.status(201).send(todo);
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.getOne();

    return res.status(200).send(todo);
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.update();

    return res.status(202).send({ status: "succes", data: todo });
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.delete();

    return res.status(200).send({ status: "succes", data: todo });
  };
}

export default new TodoController();
