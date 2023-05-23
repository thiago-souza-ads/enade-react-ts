import styled from 'styled-components';

export const Main = styled.div`
width: 20%;
height: 75%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin: 5px;

border: 1px solid #D7D7D7;
border-radius: 2%;

@media (max-width: 767px) {
    width: 85%;
    height: 40%;
    font-size: 15px;
  }
`;

export const IconBox = styled.div`
width: 80%;
height: 25%;
display: flex;
justify-content: center;
align-items: center;

img {
    width: 40%;
}
@media (max-width: 767px) {
    width: 50%;
    height: 50%;
  }
`;

export const Title = styled.div`
width: 80%;
height:10%;
display: flex;
justify-content: center;
align-items: center;

`;

export const Text = styled.div`
width: 80%;
height:50%;
display: flex;
justify-content: center;
align-items: center;

`;