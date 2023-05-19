import styled from "styled-components";

export const Main = styled.div`
  ${(props) => props};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;

  @media (max-width: 767px) {
    width: 90%;
    min-height: 200px;
  }
`;

export const Text = styled.text`
  ${(props) => props}
`;
