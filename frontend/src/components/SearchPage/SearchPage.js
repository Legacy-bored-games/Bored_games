//React Components
import Map from "./Map";
import EventCard from "../EventCard";
import MapView from './map/MapView';
//Styled Components
import {
  StyledSearchPage,
  StyledSearchForm,
  StyledButton,
  StyledMapContainer,
} from "../styles/SearchPage.styled";

//ReactRouter
import { NavLink } from "react-router-dom";

function SearchPage({event, setEvent}) {
  return (
    <StyledSearchPage>
      <StyledSearchForm>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <StyledButton>Submit</StyledButton>
        <EventCard event={event} setEvent={setEvent}></EventCard>
        <EventCard event={event} setEvent={setEvent}></EventCard>
        <EventCard event={event} setEvent={setEvent}></EventCard>
      </StyledSearchForm>
      
        <h1>Find board game sessions near you</h1>
        <MapView />
        <NavLink to="/session/host-new">
          <StyledButton>Host session</StyledButton>
        </NavLink>
    
    </StyledSearchPage>
  );
}

export default SearchPage;
