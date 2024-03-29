import { connection } from "../database/db.js";


const postUser = async (name, cpf) => {
  return await connection.query(
    `INSERT INTO "User" (name, cpf) VALUES ($1, $2);`,
    [name, cpf]
  );
};
const getUsers = async () => {
  return await connection.query(`SELECT * FROM "User"`);
};

const getOneUser = async (cpf) => {
   return await connection.query(`SELECT * FROM "User" WHERE cpf = $1`,[cpf]);
};


const getUserId = async (cpf) => {
  return await connection.query(`SELECT id FROM "User" WHERE cpf = $1`, [cpf]);
}
export { postUser, getUsers, getOneUser,getUserId};
