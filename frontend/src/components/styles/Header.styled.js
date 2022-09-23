import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: lightcyan;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    

    h1 {
        font-family: 'Rubik Dirt';
        word-wrap: break-all;
        cursor: pointer;
    }

    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap:2em;

        p {
            text-align: center;
            padding: .7em;
            border-radius: 5px;
            &:hover{
            background-color: black;
            color:white;
            cursor: pointer;
        }
        }
    }

    p {
        cursor: pointer;
    }
`