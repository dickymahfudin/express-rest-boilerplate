import { Request, Response } from "express";
import IController from "./ControllerInterface";
const db = require("../db/models");

class TodoController implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;

    const todos = await db.todo.findAll({ where: { user_id } });
    return res.status(200).send(todos);
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const { description } = req.body;

    const todo = await db.todo.create({ user_id, description });
    return res.status(201).send(todo);
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const { id } = req.params;

    const todo = await db.todo.findAll({ where: { id, user_id } });
    return res.status(200).send(todo);
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const { id } = req.params;
    const { description } = req.body;

    await db.todo.update({ description }, { where: { id, user_id } });
    return res.status(200).send("success");
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const { id: user_id } = req.app.locals.credential;
    const { id } = req.params;

    await db.todo.destroy({ where: { id, user_id } });
    return res.status(200).send("success");
  };
}

export default new TodoController();
