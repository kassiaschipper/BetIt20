import axios from "axios";

//TODO: Inserir url de deploy 

const BASE_URL = "http://localhost:4009";

function postUser(body){
    const promisse = axios.post(`${BASE_URL}/user`,body);
    return promisse;
}

function postBet(userId, body){
    console.log(`postBet ${body}`)
    const promisse = axios.post(`${BASE_URL}/bet/${userId}`,body);
    return promisse;
}

function getAllBets(){
    console.log("entra getAllBets")
    const promisse = axios.get(`${BASE_URL}/bet`);
    return promisse
}

export {postUser, postBet, getAllBets}
