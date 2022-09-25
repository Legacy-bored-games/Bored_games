//React Router
import { useParams } from "react-router-dom";

//Styled Components
import {
  StyledUserProfile,
  StyledUserInfoContainer,
  StyledUserInfo,
  StyledAdditionalInfoContainer,
  StyledFavBoardGames,
  StyledUpcomingSessions,
  StyledEventCardContainer
} from "../styles/UserProfile.styled";

function UserProfile() {
  let { userId } = useParams();
  console.log(userId);
  return (
    <StyledUserProfile>
      <StyledUserInfoContainer>
        <i
          class="fa-solid fa-user"
          style={{
            fontSize: "3.5em",
            background: "none",
            border: ".1em solid black",
            borderRadius: "15em",
            padding: ".5em",
            cursor: "pointer",
          }}
        ></i>
        <StyledUserInfo>
            <h1>Name, Age</h1>
            <h2>City, Country</h2>
        </StyledUserInfo>
      </StyledUserInfoContainer>
      <StyledAdditionalInfoContainer>
        <StyledFavBoardGames>
            <h3>My favourite board games:</h3> 
            <ul>
                <li>Monopoly</li>
                <li>Munchkin</li>
            </ul>
        </StyledFavBoardGames>
        <StyledUpcomingSessions>
          <h3>Upcoming Sessions</h3>
          <StyledEventCardContainer>
            <p>Event 1</p>
            <p>Event 2</p>
            <p>Event 3</p>
          </StyledEventCardContainer>
        </StyledUpcomingSessions>

      </StyledAdditionalInfoContainer>
    </StyledUserProfile>
  );
}

export default UserProfile;