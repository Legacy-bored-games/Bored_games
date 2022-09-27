import styled from "styled-components";

export const StyledHostEvent = styled.div`
    margin-top: -7em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: .2em;
    padding: 5em;

    h1 {
        width: 35%;
        font-family: "Poppins";
        font-size: 4em;
        font-weight: 700;
        margin-bottom: 0;
    }
`
export const StyledTitle = styled.h2` 
    text-align: center;
    font-family: "Poppins";
    font-weight: 400;
`

export const StyledButton = styled.form`
    width: 100%;
    padding: .5em;
    border: none;
    border-radius: 2em;
    margin-top: 1em;
    text-align: center;
    align-self: center;
    background-color: black;
    font-family: 'Poppins';
    font-size: 1.2em;
    font-weight: 500;
    color: white;
    margin-bottom: .5em;
    

    &:hover {
        cursor: pointer;
        background-color: tomato;
    }
`

