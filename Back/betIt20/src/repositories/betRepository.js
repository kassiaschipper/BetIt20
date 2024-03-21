import { connection } from "../database/db.js";

const postBet = async (userId, betNumersList) => {
 return await connection.query(
     `INSERT INTO "Bet" ("userId", numberslist) VALUES ($1, $2);`,
     [Number(userId),betNumersList]
   );
};

const getAllBets = async() => {
  return await connection.query(`SELECT * FROM "Bet"`);
}

const getBetByNumbers = async (drawnNumbers) => {
  console.log("Numeros sorteados  " + drawnNumbers)
  return await connection.query(`Select * FROM "Bet" WHERE numberslist = $1`,[drawnNumbers]);
}

const getLastBetByUserId = async (userId) => {
  return await connection.query(`SELECT * FROM "Bet" WHERE "userId" = $1 ORDER BY "id" DESC LIMIT 1`,[userId]);
};

export {postBet, getAllBets, getBetByNumbers, getLastBetByUserId}