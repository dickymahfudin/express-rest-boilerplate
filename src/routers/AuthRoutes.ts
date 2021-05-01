import BaseRoutes from "./BaseRoutes";

//Controller
import AuthController from "../controllers/AuthController";

class UserRouter extends BaseRoutes {
  public routes(): void {
    this.router.get("/", AuthController.index);
    this.router.post("/", AuthController.create);
  }
}

export default new UserRouter().router;
