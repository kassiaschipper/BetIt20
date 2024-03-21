import styled from "styled-components";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";
import { getAllBets } from "../../service/betIt20Service";
import { useNavigate } from "react-router-dom";

export default function Draw() {
  const [showNumbers, setShowNumbers] = useState(false);
  const [finalNumbers, setFinalNumbers] = useState([]);
  const [winnersList, setWinnersList] = useState([]);
  const [noWinners, setNoWinners] = useState(false);
  const drawnNumbers = [];
  const navigate = useNavigate();

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

  //Para testar uma aposta vencedora, usar testNumber com uma aposta que já esteja no banco de dados,
  //porém nesse caso é preciso ordenar a aposta e coloca-la no formato de string, conforme exemplo abaixo.
  //Depois é necessário descomentar a linha 57 e comentar a linha 58

  const testNumber = ["2351020"];

  function findWinners() {
    getAllBets()
      .then((res) => {
        const finalBets = [];
        //const order = [];
        const listIndexWinners = [];
        const winners = [];

        //Cria uma array com todos as apostas e seus respectivos "id" e "userId"
        for (let i = 0; i < res.data.length; i++) {
          const objeto = res.data[i];
          objeto.numberslist.sort((a, b) => a - b);
          finalBets.push([objeto.id, objeto.userId, objeto.numberslist]);
        }

        //Converte o array de apostas em uma string para facilitar a comparação
        const strFinalBets = finalBets.map((value) => value[2].join(""));

        const drawnNumberInOrder = finalNumbers.sort((a, b) => a - b);
        const strDrawnNumbersInOder = drawnNumberInOrder.join("");

        const findWinners = strFinalBets.map((value) =>
          value.includes(testNumber)
          //value.includes(strDrawnNumbersInOder)
        );
        //console.log(" Vencedores: " + findWinners);

        const indexOfWinnersOnList = findWinners.map((value, index) => {
          if (value == true) {
            listIndexWinners.push(index);
          }
        });

        listIndexWinners.forEach((index) => {
          if (finalBets[index]) {
            winners.push(finalBets[index]);
          }
        });
        setWinnersList(winners);

        if (winnersList.length == 0) {
          setNoWinners(true);
        }
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
      <NewRoundButtonWrapper><button onClick={()=>navigate("/registration")}>Encerrar rodada</button></NewRoundButtonWrapper>
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
          <WinnersWrapper>
            {winnersList.length == 0 ? (
              noWinners == true ? (
                <p>Sem vencedores nessa rodada</p>
              ) : (
                ""
              )
            ) : (
              <p>
                Parabéns ao(s) vencedor(es)! <br></br> Confira o código das
                apostas vencedoras :{" "}
                {winnersList.map((value) => (
                  <span>{value[0] + "; "}</span>
                ))}
              </p>
            )}
            </WinnersWrapper>

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
const WinnersWrapper = styled.div`
  width: 90%;
  height: 30%;
  margin-top: 05%;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 10px;
  padding-top: 5%;



  p {
    color: #007bb8da;
    font-size: 1.2rem;
  }
  span {
    font-weight: 600;
  }
  box-shadow: 4px 2px 4px 4px rgba(0, 0, 0, 0.25);
`;
const NewRoundButtonWrapper = styled.div`
  width: 10%;
  height: 25%;
  display: flex;
  position: fixed;
  right: 15%;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: end;

  button{
    width: 10rem;
    height: auto;
    background-color: transparent;
    border: 5px solid white;
    color: white;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 800;
    cursor: pointer;
  }
`