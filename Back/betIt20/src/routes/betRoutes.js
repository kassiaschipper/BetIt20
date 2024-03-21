import { Router } from "express";
import { getBetList, insertBet, findBetWinner } from "../controllers/betController.js";

const routerBet = Router();
routerBet.get("/bet", getBetList)
routerBet.post("/bet/:userId", insertBet)
routerBet.get("/bet/betWinners", findBetWinner)

export default routerBet
