import * as betRepository from "../repositories/betRepository.js";

async function insertBet(req, res) {
  const { userId } = req.params;

  try {
    const insertBet = await betRepository.postBet(userId, req.body);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function getBetList(req, res) {
  try {
    const getAll = await betRepository.getAllBets();
    const betList = getAll.rows;
    res.status(200).send(betList);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export { getBetList, insertBet };
