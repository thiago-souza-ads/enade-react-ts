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

  .Alternative {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .Response {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  p {
    cursor: pointer;
    padding-left: 10px;
  }
`;
