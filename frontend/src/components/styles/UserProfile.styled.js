import styled from "styled-components";

export const StyledUserProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid black;
    padding: 3em;
    gap:3em;

`

export const StyledUserInfoContainer = styled.div `
    display:flex;
    gap: 3em;
    border: 1px solid black;
    height: 7em;
    margin-top: -1em;
`

export const StyledUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    border: 1px solid red;

    h1 {
        margin-bottom: 0;
    }

    h2 {
        margin-top: 0;
        font-weight: 300;
    }
`

export const StyledAdditionalInfoContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const StyledFavBoardGames = styled.div
`

`

export const StyledUpcomingSessions = styled.div
`
`

export const StyledEventCardContainer = styled.div` 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`