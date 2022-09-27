import styled from "styled-components";

export const StyledFormTitle = styled.h1`
    font-family:'Poppins';
    font-size: 2.5em;
    margin-bottom: 0;
    margin-top: -1.5em;
`
export const StyledSubTitle = styled.div`
    display: flex;
    justify-content: center;

    h1 {
        font-size:1.1em;
        font-weight: 400;
    }

`

export const StyledButtonContainer = styled.div`
    display: flex;
    gap:2em;
`

export const StyledButton = styled.button`
    width: 100%;
    padding: .2em;
    border: none;
    border-radius: 2em;
    align-self: center;
    background-color: tomato;
    font-family: 'Poppins';
    font-size: 1.2em;
    font-weight: 500;
    color: white;
    margin-bottom: .5em;
    

    &:hover {
        cursor: pointer;
        background-color: black;
    }

    &:disabled {
        background-color: lightgray;
        color:gray;
    }
    

`