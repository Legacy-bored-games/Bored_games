import styled from "styled-components";

export const StyledEvent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3em;
    margin-top: -5em;

    p {
        color: gray;
        font-weight: 300;
    }
`

export const StyledBasicInfo = styled.div` 
    display: flex;
    align-items: center;
    gap:2em;
    margin-bottom: -2em;

    h1 {
        font-size: 2.5em;
    }
`

export const StyledAdditionalInfo= styled.div` 
    h2 {
        font-weight: 500;
    }
`

export const StyledBookSeat=styled.div` 
    margin-top: 5em;
    display: flex;
    align-items: center;
    gap: 3em;
`

export const StyledButton=styled.button` 
    width: 6em;
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
    
    &:disabled {
        cursor: auto;
        background-color: lightgray;
        color: black;
    }
`
