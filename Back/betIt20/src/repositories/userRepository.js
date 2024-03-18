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

export { postUser, getUsers };
