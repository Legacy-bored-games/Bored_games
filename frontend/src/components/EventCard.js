import React from "react"

//ReactRouter
import { NavLink } from "react-router-dom";

//Styled Components
import { StyledEventCard, StyledLocation, StyledButton } from "./styles/EventCard.styled";

function EventCard({event, setEvent}) {
    
    return (
        <StyledEventCard>
            <h1>{event.title}</h1>
            <StyledLocation>
                <i class="fa-solid fa-location-dot"></i>
                <h2>{event.location}</h2>
            </StyledLocation>
        
            <h3>{event.date}</h3>
            {/* Need to figure out how to pass the event's id to Navlink */}
            <NavLink to="session/:id">
                <StyledButton>More</StyledButton>
            </NavLink>
            
        </StyledEventCard>
    )
}

export default EventCard;