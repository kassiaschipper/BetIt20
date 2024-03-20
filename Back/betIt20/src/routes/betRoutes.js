import { Router } from "express";
import { getBetList, insertBet } from "../controllers/betController.js";

const routerBet = Router();
routerBet.get("/bet", getBetList)
routerBet.post("/bet/:userId", insertBet)

export default routerBet
