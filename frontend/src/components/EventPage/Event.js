import React from "react"

//React Router
import { useParams } from "react-router-dom";

//Styled Components
import { StyledEvent, StyledBasicInfo, StyledAdditionalInfo, StyledBookSeat, StyledButton } from "../styles/Event.styled"

//*Apı Call
import { BoardGameApi, EventApi } from "../../api/index";

function Event() {
    const [event, setEvent] = React.useState({
        eventId: useParams().id,
      });
  

  //Handle side effect from Api call with Effect hook
  React.useEffect(() => {
    renderEvent();
  }, [])

 
//Render user information according to the data the user submitted when signing up
async function renderEvent() {
const eventObj = await EventApi.getEvent(event.eventId);
 
const boardGameObj = await BoardGameApi.getBoardGame(eventObj.boardGame._id);
setEvent((prevUser) => {
  return {
    ...prevUser,
    
    where: eventObj.where,
    when: eventObj.when,
    boardGame: boardGameObj.name,  
    totalSeats: eventObj.howManyPlayers,
    levelOfDifficulties: eventObj.levelOfDifficulties,
    averageDuration: eventObj.averageDuration,
    leftSeats:eventObj.howManyPlayers-eventObj.participantUser.length,
    hostedBy: (eventObj.creatorUser.firstName+" "+eventObj.creatorUser.lastName).toUpperCase(),
  };
});
}


   

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
                <h1>{event.boardGame}</h1>
                <p>{event.levelOfDifficulties}</p>
            </StyledBasicInfo>
            <StyledAdditionalInfo>
                <p>Hosted by {event.hostedBy}</p>
                <h2><i class="fa-solid fa-location-dot"></i> {event.where} | {event.when}</h2>
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