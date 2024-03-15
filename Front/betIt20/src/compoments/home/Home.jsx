import styled from "styled-components";
import Logo from "../../assets/images/Logo.png";

export default function Home() {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          {" "}
          <img src={Logo} />{" "}
        </LogoWrapper>
        <TitleWrapper>
          <h1>Boas vindas ao Bet It 20, o seu novo sistema de apostas!</h1>
          <h2>Prepare-se para se divertir e ganhar prêmios!</h2>
        </TitleWrapper>
        <ButtonWrapper>
          <div onClick={() => alert("bora apostar")}>Apostar</div>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 40%;
  height: 40%;
  display: flex;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5%;
  color: white;

  h1 {
    font-weight: 400;
    font-size: 2rem;
  }
  h2 {
    font-weight: 300;
    font-size: 1.2rem;
    padding-top: 1%;
  }
`;

const ButtonWrapper = styled.div`
  width: 18%;
  height: 7%;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;

  div {
    font-size: 1.5rem;
    color: #007cb8;
    font-weight: 600;
  }

  margin-top: 03rem;
  cursor: pointer;

`;
