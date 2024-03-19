import { useState } from "react";
import styled from "styled-components";

export default function Bet({betBox, setBetBox}) {
  const [numbers, setNumbers] = useState(["", "", "", "", ""]);

  const handleChange = (index, value) => {
    const updateNumbers = [...numbers];
    updateNumbers[index] = value;
    setNumbers(updateNumbers);
  };

  return (
    <>
      <BoxWrapper>
        {" "}
        <p>Escolha 5 números de 1 a 50</p>
        <BetWrapper>
          <form action="">
            {numbers.map((number, index) => (
              <input
                type="number"
                name={`number-${index}`}
                max={50}
                min={1}
                placeholder=""
                value={number}
                onChange={(e) => handleChange(index, e.target.value)}
                required
              />
            ))}
          </form>
        </BetWrapper>
        <ButtonWrapper>
          <button>Enviar</button>
          <button onClick={() => setBetBox(!betBox)}>Sair</button>
        </ButtonWrapper>
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
  width: 40%;
  display: flex;
  justify-content: space-around;
  
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
