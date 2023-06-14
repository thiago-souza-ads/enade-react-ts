import styled from "styled-components";

export const Button = styled.button`
  background: white;
  border: 1px solid black;
  border-radius: 0.25rem;
  padding: 10px;
  color: black;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  transition: 0.4s;
  box-shadow: 0px 5px 10px #def6fb;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`;
