import { Router } from "express";
import { insertUser, getUsers } from "../controllers/usersController.js";
import { validateUser } from "../middlewares/userMiddlewares.js";

const routerUser = Router();
routerUser.post("/user", validateUser, insertUser)
routerUser.get("/users", getUsers)

export default routerUser
