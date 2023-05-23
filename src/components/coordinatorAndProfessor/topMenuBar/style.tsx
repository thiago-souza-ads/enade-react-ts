import styled from 'styled-components';

export const Main = styled.div`
width: 100vw;
height: 4rem;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

@media (max-width: 767px) {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content:center;
}

`;

export const HomeIconBox = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuLink = styled.div`
  padding: 15px;
  a {
    color: #707070;
    text-decoration: none;
  }
`;

export const EstacioLogoBox = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;