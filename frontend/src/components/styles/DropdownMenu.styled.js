 import styled from "styled-components";

export const StyledDropdownMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: all 0.5s ease;
    

`

export const StyledList = styled.ul`
    background-color: black;
    color: white;
    border-radius: 1.5em;
    list-style-type: none;
    margin: 0;
    padding: 1em;
    overflow: hidden;
    position: absolute;
    top:6em;
    right:2em;
`

export const StyledListItem = styled.li`
    padding: 1em;
    border-radius: 1em;

    &:hover{
        background-color: tomato;
    }
`