import * as userRepository from "../repositories/userRepository.js";

async function insertUser(req, res) {
  const { name, cpf } = req.body;
  
  try {
    const findCpf = await userRepository.getOneUser(cpf);
   
    if (findCpf.rowCount === 1) {
      const userId = findCpf.rows.map(user => user.id);
      return res.status(200).send({message:"Usuário já cadastrado", userId});
    }
   
    const insertUser = await userRepository.postUser(name, cpf);
    const getUerId = await userRepository.getUserId(cpf);
    const userId = getUerId.rows.map(user => user.id) 

    res.status(201).send({message:"Usuário já cadastrado", userId});
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
