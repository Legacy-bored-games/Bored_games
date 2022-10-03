import React from 'react'

import Moment from 'react-moment'

//ReactRouter
import { NavLink } from 'react-router-dom'

//Styled Components
import {
  StyledEventCard,
  StyledLocation,
  StyledButton,
} from './styles/EventCard.styled'

function EventCard({ event }) {
  return (
    <StyledEventCard>
      <h1>{event.boardGame}</h1>
      <StyledLocation>
        <i class='fa-solid fa-location-dot'></i>
        <h2>{event.where}</h2>
      </StyledLocation>

      <h3>
        <Moment format='DD/MM/YYYY'>{event.when}</Moment>
      </h3>
      {/* Need to figure out how to pass the event's id to Navlink */}
      <NavLink to='session/:id'>
        <StyledButton>More</StyledButton>
      </NavLink>
    </StyledEventCard>
  )
}

export default EventCard
