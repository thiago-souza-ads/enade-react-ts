import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    & {
      display: flex;
      width: 100vw;
      height: 100vh;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Text = styled.text`
  ${(props) => props}
`;

export const MainUserInterface = styled.div`
  width: 1180px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const MainUserInterfaceTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MainUserInterfaceFrames = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
