import * as userRepository from "../repositories/userRepository.js";

async function insertUser(req, res) {
  const { name, cpf } = req.body;

  try {
    const insertUserUser = await userRepository.postUser(name, cpf);
    res.status(201).send(insertUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function getUsers(req, res) {
  try {
    const getAllUsers = await userRepository.getUsers();
    const usersList = getAllUsers.rows
    res.status(200).send(usersList);
  } catch (error) {
    console.log(error)
    return res.sendStatus(500);
  }
}

export { insertUser, getUsers };
