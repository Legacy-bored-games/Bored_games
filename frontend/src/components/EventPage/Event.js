import React from "react"

//React Router
import { useParams } from "react-router-dom";

//Styled Components
import { StyledEvent, StyledBasicInfo, StyledAdditionalInfo, StyledBookSeat, StyledButton } from "../styles/Event.styled"


function Event({event, setEvent}) {
    const eventId = useParams().id;

    //Update the event id
    setEvent(prevEvent => {
        return {
            ...prevEvent,
            eventId:eventId
        };
    });

    function bookSeat() {
        setEvent(prevEvent => {
            if(prevEvent.totalSeats >= prevEvent.leftSeats) {
                return { 
                    ...prevEvent,
                    leftSeats:  prevEvent.leftSeats-1};
            };
        });
    };


    return (
        <StyledEvent>
            <StyledBasicInfo>
                <h1>{event.title}</h1>
                <p>{event.level}</p>
            </StyledBasicInfo>
            <StyledAdditionalInfo>
                <p>Hosted by {event.hostedBy}</p>
                <h2><i class="fa-solid fa-location-dot"></i> {event.location} | {event.date}</h2>
            </StyledAdditionalInfo>
            <StyledBookSeat>
                <h3>Seats left : {event.leftSeats} / {event.totalSeats}</h3>
                <StyledButton 
                    disabled={event.leftSeats === 0 ? true : false}
                    onClick={bookSeat}
                >   Book
                </StyledButton>
            </StyledBookSeat>
        </StyledEvent>
    )
}

export default Event