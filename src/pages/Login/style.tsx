import styled from 'styled-components';
import background from '../../assets/bgestacio.jpg';

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: content-box;
`;

export const Login = styled.div`
  width: 70%;
  height: 60%;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-shadow: 0px 0px 5px #1153a4;
`;

export const LoginInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background: #1153a480;
border-radius: 1rem;
width: 40%;
height: 60%;

.InputsBox{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.error{
  width: 60%;
  color: white;
  text-align: center;
}
`;