import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 1180px;
  height: 100%;

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const Stage = styled.div`
  border-bottom: 1px solid black;
`;

export const Questions = styled.div`
  width: 800px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    width: 95%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
  }

  .answer {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  p {
    cursor: pointer;
    padding-left: 10px;
    color: green;
  }
`;

export const SelectContainer = styled.div`
  width: 800px;
  height: 70px;
  display: flex;

  justify-content: space-between;
  align-items: center;

  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 20px;

  label {
    margin-left: 5px;
  }

  @media (max-width: 767px) {
    width: 90%;
  }
`;

export const SelectContainer2 = styled.div`
  width: 400px;
  display: flex;

  justify-content: center;
  align-items: center;

  div {
    margin: 10px;
  }
  label {
    margin-left: 5px;
  }

  @media (max-width: 767px) {
    width: 90%;
  }
`;