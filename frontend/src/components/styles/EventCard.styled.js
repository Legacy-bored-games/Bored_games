import styled from "styled-components"

export const StyledEventCard = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border: .2em solid black;
    padding: .7em 2em;

    h1 {
        font-size:2em;
    }

    h2, h3 {
        font-size: 1.2em;
        font-weight: 400;
        margin-top: 0;
    }
`

export const StyledLocation = styled.div` 
    display: flex;
    align-items: center;
    gap: .2em;;
`

export const StyledButton = styled.button` 
    width: 5em;
    padding: .5em;
    border: none;
    border-radius: 2em;
    align-self: center;
    background-color: tomato;
    font-family: 'Poppins';
    font-size: 1em;
    font-weight: 500;
    color: white;

    &:hover {
        cursor: pointer;
        background-color: black;
    }
`