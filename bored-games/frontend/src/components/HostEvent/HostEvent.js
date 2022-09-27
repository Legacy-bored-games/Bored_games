//React Components
import Form from "./NewEventForm";
//Styled Components
import { StyledHostEvent } from "../styles/HostEventPage.styled";

function HostEvent() {
    return(
        <StyledHostEvent>
            <h1>
                Host a Board Game Session
            </h1>
            <Form />
        </StyledHostEvent>
    )
}

export default HostEvent;