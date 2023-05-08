import styled from "styled-components";

export const Button = styled.button`
  background: white;
  border: 1px solid black;
  border-radius: 0.25rem;
  width: 15rem;
  height: 2.5rem;
  color: black;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  transition: 0.4s;
  box-shadow: 0px 5px 10px #DEF6FB;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`;
