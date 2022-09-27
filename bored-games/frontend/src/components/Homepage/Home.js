//Styled Components
import { StyledHome } from "../styles/Home.styled";
//ReactRouter
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <StyledHome>
      <h1>Bored Games</h1>
      <h2>
        An app that connects people over their love for board games.&nbsp;
        <NavLink to="/signup" style={{ color: "tomato" }}>
          Sign up
        </NavLink>
        &nbsp;now and join in the fun!
      </h2>
      <p>
        Find out more about Bored Games&nbsp;
        <NavLink to="/about" style={{ color: "tomato" }}>
          here
        </NavLink>
        .
      </p>
    </StyledHome>
  );
}

export default Home;
