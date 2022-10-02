import styled from 'styled-components'

export const StyledUserProfile = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3em;
  gap: 3em;
`

export const StyledUserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8em;
`

export const StyledBasicInfo = styled.div`
  display: flex;
  gap: 3em;
  height: 7em;
`

export const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    font-weight: 300;
    font-size: 1em;
  }
`

export const StyledAdditionalInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5em;
  margin-left: 10em;
`

export const StyledFavBoardGames = styled.div``

export const StyledUpcomingSessions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledEventCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
`
