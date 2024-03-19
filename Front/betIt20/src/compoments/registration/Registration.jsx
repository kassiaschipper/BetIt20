import styled from "styled-components";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";
import { postUser } from "../../service/betIt20Service";
import Bet from "../bet/Bet"

export default function Registration() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [message, setMessage] = useState("Dados cadastrado.Realize a aposta:")
  const [disabledInput, setDisabledInput] = useState(false);
  const [betBox, setBetBox] = useState(false);

  function sendForm(e) {
    e.preventDefault();
    setDisabledInput(true);

    const body = {
      name,
      cpf,
    };

    postUser(body)
      .then((res) => {
        if(res.data === "Usuário já cadastrado"){
          setMessage("Dados já cadastrado. Realize a aposta:")
        }
        resetForm();
        setBetBox(true);
      })
      .catch((res) => {
        console.log(res.data);
        return;
      });
    }
    
  function resetForm() {
    setName("");
    setCpf("");
    setDisabledInput(false);
    setBetBox(false);
  }
  
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          {" "}
          <img src={Logo} />{" "}
        </LogoWrapper>
        <TitleWrapper>
          <h1>
            Comece digitando nome e <br></br> CPF do apostdor
          </h1>
          <h2>Depois informe os 5 números da aposta!</h2>
        </TitleWrapper>
        <form onSubmit={sendForm}>
        <FormWrapper>
          <p>Nome</p>
          <input
            type="text"
            name="nome"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={disabledInput}
            required
          />
          <p>CPF</p>
          <input
            type="text"
            name="cpf"
            placeholder="xxxxxxxxxxx"
            min={11}
            max={11}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            disabled={disabledInput}
            required
          />
        <ButtonWrapper>
          <button type="submit" disabled={disabledInput}>Confirmar dados</button>
        </ButtonWrapper>
        </FormWrapper>
        </form>
        {betBox === true ? <Bet betBox={betBox} setBetBox={setBetBox}/> : "" }
        
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin:0 auto;
`;

const LogoWrapper = styled.div`
  width: 25%;
  height: 25%;
  display: flex;
  position: fixed;
  right: 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3%;
  color: white;

  h1 {
    font-weight: 600;
    font-size: 1.8rem;
    text-align: center;
    line-height: 2rem;
    padding-bottom: 1rem;
  }
  h2 {
    font-weight: 600;
    font-size: 1rem;
  }
`;
const FormWrapper = styled.div`
  width: 30vw;
  height: 45vh;
  background-color: white;
  border-radius: 20px;
  margin-top: 5%;
  padding-top: 2%;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;

  p {
    width: 20vw;
    color: #007cb8;
    font-weight: 700;
    padding-bottom: 2px;
  }
  input {
    width: 20vw;
    height: 6vh;
    font-size: 1rem;
    margin-bottom: 2%;
    border-radius: 5px;
    border: none;
    background-color: rgb(214, 214, 214, 0.19);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-left: 5px;

    &::placeholder {
      color: rgb(0, 0, 0, 0.3);
      padding-left: 2px;
    }
    &:focus {
      outline: none;
      background-color: #007bb822;
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 45%;
  height: 15%;
  margin-top: 02%;
  background-color: #007cb8;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  button {
    font-size: 1rem;
    color: white;
    font-weight: 400;
    background-color: #007cb8;
    width: 100%;
    height: 100%;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  cursor: pointer;
`;
