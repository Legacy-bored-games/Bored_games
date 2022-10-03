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

import { EventApi } from '../../api/index.js'

//ReactRouter
import { NavLink } from 'react-router-dom'

function SearchPage({ event, setEvent }) {
  //!Xenia: fetch data with events from db
  React.useEffect(() => {
    console.log('ddddd')
    renderEvent()
  }, [])

  //Render user information according to the data the user submitted when signing up
  async function renderEvent() {
    await EventApi.getEvents().then((res) => {
      setEvent(res.data)
    })
  }
 

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
        {event &&
          event.map((ev) => <EventCard id={ev._id} event={ev} key={ev._id} />)}

        {/* <EventCard event={event[0]} setEvent={setEvent}></EventCard>
        <EventCard event={event[1]} setEvent={setEvent}></EventCard>
        <EventCard event={event[2]} setEvent={setEvent}></EventCard> */}
      </StyledEventContainer>

      <StyledMapContainer>
        <h1>Find board game sessions near you</h1>
        <MapView event={event} />
        <NavLink to='/session/host-new'>
          <StyledButton>Host session</StyledButton>
        </NavLink>
      </StyledMapContainer>
    </StyledSearchPage>
  )
}

export default SearchPage
