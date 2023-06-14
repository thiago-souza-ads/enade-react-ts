import styled from 'styled-components';

export const Main = styled.div`
  
  input{
    width: 15rem;
    height: 2rem;
    border-radius: 0.2rem;
    padding: 0.5rem;
    border-style: none;
    background: #cccccccc;

    @media (max-width: 767px) {
    & {
     font-size: 20px;
    }
  }
  }
`;
