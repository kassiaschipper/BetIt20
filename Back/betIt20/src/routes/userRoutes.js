import { Router } from "express";
import { insertUser, getUsers } from "../controllers/usersController.js";
import { validateUser } from "../middlewares/userMiddlewares.js";
import { getOneUser } from "../repositories/userRepository.js";

const routerUser = Router();
routerUser.post("/user", validateUser, insertUser)
routerUser.get("/users", getUsers)

export default routerUser
