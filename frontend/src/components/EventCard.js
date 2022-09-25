import React from "react"

//Styled Components
import { StyledEventCard, StyledLocation, StyledButton } from "./styles/EventCard.styled";

function EventCard() {
    const [event, setEvent] = React.useState({
        // eventId: useParams().id,
        title:"Monopoly",
        level:"Easy",
        hostedBy:"Maria",
        location:"Thessaloniki",
        date:"22-09-2022",
        leftSeats:6,
        totalSeats:6
    })
    return (
        <StyledEventCard>
            <h1>{event.title}</h1>
            <StyledLocation>
                <i class="fa-solid fa-location-dot"></i>
                <h2>{event.location}</h2>
            </StyledLocation>
        
            <h3>{event.date}</h3>
            <StyledButton>More</StyledButton>
        </StyledEventCard>
    )
}

export default EventCard;