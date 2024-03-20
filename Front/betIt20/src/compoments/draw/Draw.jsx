import styled from "styled-components";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";
import { getAllBets } from "../../service/betIt20Service";

export default function Draw() {
  const [showNumbers, setShowNumbers] = useState(false);
  const [finalNumbers, setFinalNumbers] = useState([]);
  const drawnNumbers = [];

  function drawRandomNumbers() {
    while (drawnNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;

      if (!drawnNumbers.includes(randomNumber)) {
        drawnNumbers.push(randomNumber);
      }
    }

    setShowNumbers(true);
    setFinalNumbers(drawnNumbers);
    return drawnNumbers;
  }

  //preciso passar a aposta vencedora para o back e levai para la a logica de comparação
  function findWinners() {
    getAllBets()
      .then((res) => {
        const allBets = res.data.map((value) => value.numberslist);

        const drawnNumberInOrder = finalNumbers.sort((a, b) => a - b);
        console.log(drawnNumberInOrder);
        const numberListInOrder = allBets.map((value) =>
          value.sort((a, b) => a - b)
        );
        console.log(numberListInOrder);

      })
      .catch((res) => {
        console.log(res);
        return;
      });
  }

  return (
    <>
      <LogoWrapper>
        {" "}
        <img src={Logo} />{" "}
      </LogoWrapper>
      <Wrapper>
        <DrawWrapper>
          <button onClick={() => drawRandomNumbers()}>Inciar sorteio</button>
          <ResultWrapper>
            {showNumbers === true ? (
              finalNumbers.map((value) => <div> {value} </div>)
            ) : (
              <p>Inicie o sorteio e veja os números da sorte</p>
            )}
          </ResultWrapper>
          <CheckBetsWrapper>
            {showNumbers === true ? (
              <button onClick={() => findWinners()}>Conferir apostas</button>
            ) : (
              ""
            )}
          </CheckBetsWrapper>
        </DrawWrapper>
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
  margin: 0 auto;
`;

const LogoWrapper = styled.div`
  width: 25%;
  height: 25%;
  display: flex;
  position: fixed;
  right: 0;
`;

const DrawWrapper = styled.div`
  width: 30vw;
  height: 80vh;
  background-color: white;
  border-radius: 20px;
  margin-top: 15%;
  padding-top: 2%;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;

  button {
    width: 50%;
    height: 15%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    background-color: #007bb8da;
    color: white;
    border: none;
    font-size: 1.5rem;
    margin-top: 10%;
    margin-bottom: 05%;
    cursor: pointer;
  }
`;

const ResultWrapper = styled.div`
  height: 20%;
  width: 70%;
  display: flex;
  justify-content: space-around;

  div {
    width: 40px;
    height: 30px;
    font-size: 1rem;
    margin-bottom: 2%;
    margin-right: 2%;
    border-radius: 5px;
    border: none;
    background-color: rgb(214, 214, 214, 0.19);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #007bb8da;
    font-weight: 600;
  }
  p {
    color: #007bb8da;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
const CheckBetsWrapper = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 100%;
    height: 60%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #007bb8da;
    color: white;
    border: none;
    font-size: 1.2rem;
    margin-top: 10%;
    margin-bottom: 05%;
    cursor: pointer;
  }
`;
