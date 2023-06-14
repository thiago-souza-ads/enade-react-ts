import styled from "styled-components";

export const Main = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  color: black;
  border: 1px solid #707070;
  border-radius: 0.5rem;
`;

export const Text = styled.text`
  ${(props) => props}
`;

export const Title = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 100px;
  grid-row-gap: 100px;
`;

export const GridSquare = styled.div`
  ${(props) => props}
  width: 80px;
  height: 80px;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  i {
    font-size: 50px;
    color: #def6fb;
  }

  .beginJourney{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
  }
`;
