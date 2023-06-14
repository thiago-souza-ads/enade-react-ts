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

export const Video = styled.div`
  width: 1080px;
  height: 520px;
  border: 1px solid black;
  border-radius: 10px;

  @media (max-width: 767px) {
    width: 90%;
    height: 200px;
  }
`;
