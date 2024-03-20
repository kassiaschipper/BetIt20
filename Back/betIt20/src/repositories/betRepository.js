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

export {postBet, getAllBets}