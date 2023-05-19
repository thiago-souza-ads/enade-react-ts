import styled from "styled-components";

export const Main = styled.div`
  width: 1180px;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
`;

export const NavBarCenter = styled.div`
  width: 1180px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 100%;
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    color: #707070;
    font-size: 18px;
  }

  p {
    color: #707070;
  }

  .Stage {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  img {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export const NavBarLeft = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  i {
    cursor: pointer;
    color: black;
    font-size: 20px;
  }
`;
