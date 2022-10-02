import React from 'react'
//React Components
import EventCard from '../EventCard'
import MapView from './map/MapView'
//Styled Components
import {
  StyledSearchPage,
  StyledSearchForm,
  StyledButton,
  StyledEventContainer,
  StyledMapContainer,
} from '../styles/SearchPage.styled'

import { EventApi } from '../../api/index'

//ReactRouter
import { NavLink } from 'react-router-dom'

function SearchPage({ event, setEvent }) {
  //!Xenia: fetch data with events from db
  React.useEffect(() => {
    renderEvent()
  }, [])

  //Render user information according to the data the user submitted when signing up
  async function renderEvent() {
    const eventObj = await EventApi.getEvents().then((res) => {
      console.log(res.data)
      setEvent(res.data)
    })
  }

  console.log(event)

  return (
    <StyledSearchPage>
      <StyledSearchForm>
        {/* <input></input>
        <input></input>
        <input></input>
        <input></input>
        <StyledButton>Submit</StyledButton> */}
      </StyledSearchForm>
      <StyledEventContainer>
        <EventCard event={event[0]} setEvent={setEvent}></EventCard>
        <EventCard event={event[1]} setEvent={setEvent}></EventCard>
        <EventCard event={event[2]} setEvent={setEvent}></EventCard>
      </StyledEventContainer>

      <StyledMapContainer>
        <h1>Find board game sessions near you</h1>
        <MapView />
        <NavLink to='/session/host-new'>
          <StyledButton>Host session</StyledButton>
        </NavLink>
      </StyledMapContainer>
    </StyledSearchPage>
  )
}

export default SearchPage
