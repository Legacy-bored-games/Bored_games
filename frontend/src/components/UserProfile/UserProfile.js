import React from "react";

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
  StyledEventCardContainer,
} from "../styles/UserProfile.styled";

//API Calls
import { UserApi } from "../../api/index";

function UserProfile() {
  const [user, setUser] = React.useState({
    userId: useParams().id,
  });

  //Handle side effect from Api call with Effect hook
  React.useEffect(() => {
        renderUser();
      }, [])


  //Render user information according to the data the user submitted when signing up
  async function renderUser() {
    const userObj = await UserApi.getUser(user.userId);
    setUser((prevUser) => {
      return {
        ...prevUser,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        age: 20, //Hardcoded for now
        city: userObj.city,
        country: userObj.country,
        favBoardGame: userObj.favBoardGame,
      };
    });
  }


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
          <h1>
            {user.firstName} {user.lastName}, {user.age}
          </h1>
          <h2>
            {user.city}, {user.country}
          </h2>
        </StyledUserInfo>
      </StyledUserInfoContainer>
      <StyledAdditionalInfoContainer>
        <StyledFavBoardGames>
          <h3>My favourite board games:</h3>
          <ul>
            <li>{user.favBoardGame}</li>
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
