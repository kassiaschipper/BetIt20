import * as userRepository from "../repositories/userRepository.js";

async function insertUser(req, res) {
  const { name, cpf } = req.body;

  try {
    const findCpf = await userRepository.getOneUser(cpf);

    if (findCpf.rowCount === 1) {
      return res.status(200).send("Usuário já cadastrado");
    }

    const insertUser = await userRepository.postUser(name, cpf);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
   
    return res.sendStatus(500);
  }
}

async function getUsers(req, res) {
  try {
    const getAllUsers = await userRepository.getUsers();
    const usersList = getAllUsers.rows;
    res.status(200).send(usersList);
  } catch (error) {
    return res.sendStatus(500);
  }
}

export { insertUser, getUsers };
