import styled from 'styled-components';

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #707070;

  background-color: #FFFFFF;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: content-box;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const MessageBox = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;

  color: #707070;

  @media (max-width: 767px) {
    justify-content: flex-start;
    padding: 3px;
    height: 10%;
    font-size: 12px;
  }
`;

export const BoardsBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    height: 85%;
  }
`;

