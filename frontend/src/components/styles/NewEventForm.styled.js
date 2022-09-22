import styled from "styled-components";

export const StyledNewEventForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  width: 25vw;
  padding: 1.5em;
  border-radius: 1em;
  gap: .5em;

  input, select {
    height: 3.2em;
    border-radius: 1em;
    border: none;
    font-family: 'Poppins';
    font-size: 1em;
    padding: .5em;
  }

  button {
    width: 7em;
    padding: .5em;
    border: none;
    border-radius: 2em;
    align-self: center;
    background-color: tomato;
    font-family: 'Poppins';
    font-size: 1.2em;
    font-weight: 500;
    color: white;

    &:hover {
        cursor: pointer;
        background-color: black;
    }
  }



`