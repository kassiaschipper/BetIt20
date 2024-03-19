import axios from "axios";

//TODO: Inserir url de deploy 

const BASE_URL = "http://localhost:4009";

function postUser(body){
    const promisse = axios.post(`${BASE_URL}/user`,body);
    return promisse;
}

export {postUser}
