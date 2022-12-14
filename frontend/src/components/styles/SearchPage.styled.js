import styled from "styled-components";

export const StyledSearchPage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3em;
`;

export const StyledSearchForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledEventContainer = styled.div` 
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
`

export const StyledButton = styled.button`
  width: 8em;
  padding: 0.5em;
  border: none;
  border-radius: 1.2em;
  align-self: center;
  background-color: tomato;
  font-family: "Poppins";
  font-size: 1em;
  font-weight: 500;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;

export const StyledMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  /* div {
    width: 40em;
    height: 20em;
    border: 1px solid black;
    border-radius: 1em;
  } */

  

  button {
    height: 3em;
  }
`;
