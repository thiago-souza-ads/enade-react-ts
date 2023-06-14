import styled from "styled-components";

export const Container = styled.div`
  background: #767676;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #767676;

  @media (max-width: 767px) {
    background: white;
  }
`;

export const Main = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  border-radius: 10px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 7px;
  border-bottom: 1px solid #767676;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: auto;

  img {
    width: 150px;
  }

  .Title {
    display: flex;
    width: 100%;
    align-items: flex-start;
  }

  .IconPerson {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      cursor: pointer;
    }
  }
`;
