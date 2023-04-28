import styled from 'styled-components';

export const Button = styled.button`
  background: #53b36c;
  border: none;
  border-radius: 0.25rem;
  width: 15rem;
  height: 2.5rem;
  color: white;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  transition: 0.4s;

  &:hover {
    background: #347345;
    scale: 1.1;
  }
`;