import React from "react"

//React Router
import { useParams } from "react-router-dom";

//Styled Components
import { StyledEvent, StyledBasicInfo, StyledAdditionalInfo, StyledBookSeat, StyledButton } from "../styles/Event.styled"

function Event() {
    let { eventId } = useParams();
    console.log(eventId);

    const [seats, setSeats] = React.useState({
        leftSeats:6,
        totalSeats:6
    })

    function bookSeat() {
        setSeats(prevSeats => {
            if(prevSeats.totalSeats >= prevSeats.leftSeats) {
                return { 
                    ...prevSeats,
                    leftSeats:  prevSeats.leftSeats-1};
            };
        });
    };


    return (
        <StyledEvent>
            <StyledBasicInfo>
                <h1>Name of board game</h1>
                <p>Level of difficulty</p>
            </StyledBasicInfo>
            <StyledAdditionalInfo>
                <p>Hosted by user</p>
                <h2>Location | Date</h2>
            </StyledAdditionalInfo>
            <StyledBookSeat>
                <h3>Seats left : {seats.leftSeats} / {seats.totalSeats}</h3>
                <StyledButton 
                    disabled={seats.leftSeats === 0 ? true : false}
                    onClick={bookSeat}
                >   Book
                </StyledButton>
            </StyledBookSeat>
        </StyledEvent>
    )
}

export default Event