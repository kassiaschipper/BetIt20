import { useState, useEffect } from "react";
import styled from "styled-components";
import { postBet } from "../../service/betIt20Service";

export default function Bet({ betBox, setBetBox, userId }) {
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [thirdNumber, setThirdNumber] = useState();
  const [fourthNumber, setFourthNumber] = useState();
  const [fifthNumber, setFifthNumber] = useState();
  const [disabledInput, setDisabledInput] = useState(false);
  const [betId, setBetId] = useState(null);
   
  const strBetNumbersList = [
    firstNumber,
    secondNumber,
    thirdNumber,
    fourthNumber,
    fifthNumber,
  ];
  useEffect(() => {
    if(betId !== null){
      alert(`Aposta realizada com sucesso, por favor guarde o número de registro "${betId}" para acompanhar a apuração`)
    }
  },[betId])

    
  function sendForm(e) {
    e.preventDefault();
    setDisabledInput(true);
    const betNumbersList = strBetNumbersList.map((value) => Number(value));
    
    postBet(userId, betNumbersList)
    .then((res) => {
      setBetId(res.data[0].id);
      console.log(betId)
      resetForm();
    })
    .catch((res) => {
      console.log(res);
      return;
    });
  }
  function resetForm() {
    setFirstNumber("");
    setSecondNumber("");
    setThirdNumber("");
    setFourthNumber("");
    setFifthNumber("");
    setDisabledInput(false)
  }
  return (
    <>
      <BoxWrapper>
        {" "}
        <p>Escolha 5 números de 1 a 50</p>
        <BetWrapper>
          <form onSubmit={sendForm}>
            <input
              type="number"
              name="firstNumber"
              max={50}
              min={1}
              placeholder=""
              value={firstNumber}
              onChange={(e) => setFirstNumber(e.target.value)}
              disabled={disabledInput}
              required
            />
            <input
              type="number"
              name="secondNumber"
              max={50}
              min={1}
              placeholder=""
              value={secondNumber}
              onChange={(e) => setSecondNumber(e.target.value)}
              disabled={disabledInput}
              required
            />
            <input
              type="number"
              name="thirdNumber"
              max={50}
              min={1}
              placeholder=""
              value={thirdNumber}
              onChange={(e) => setThirdNumber(e.target.value)}
              disabled={disabledInput}
              required
            />
            <input
              type="number"
              name="fourthNumber"
              max={50}
              min={1}
              placeholder=""
              value={fourthNumber}
              onChange={(e) => setFourthNumber(e.target.value)}
              disabled={disabledInput}
              required
            />
            <input
              type="number"
              name="fifthNumber"
              max={50}
              min={1}
              placeholder=""
              value={fifthNumber}
              onChange={(e) => setFifthNumber(e.target.value)}
              disabled={disabledInput}
              required
            />
            {/* <button type="submit" disabled={disabledInput}>
              teste
            </button> */}
        <ButtonWrapper>
          <button type="submit" disabled={disabledInput} >Enviar</button>
          <button onClick={() => setBetBox(!betBox)}>Sair</button>
        </ButtonWrapper>
          </form>
        </BetWrapper>
      </BoxWrapper>
      
    </>
  );
}

const BoxWrapper = styled.div`
  width: 30vw;
  height: 50vh;
  color: #007cb8;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  position: relative;
  top: -10%;
  border-radius: 20px;

  p {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 5%;
    margin-bottom: 4%;
  }
`;
const BetWrapper = styled.span`
  width: 30vw;
  height: 10vh;
  
  input {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    margin-bottom: 2%;
    margin-right: 2%;
    border-radius: 5px;
    border: none;
    background-color: rgb(214, 214, 214, 0.19);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-left: 5px;

    &::placeholder {
      color: rgb(0, 0, 0, 0.3);
      padding-left: 2px;
      text-align: center;
    }
    &:focus {
      outline: none;
      background-color: #007bb822;
    }
  }
 
`;

const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  button {
    width: 4rem;
    height: 2rem;
    border-radius: 10px;
    border: none;
    color: white;
    background-color: #007cb8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;
