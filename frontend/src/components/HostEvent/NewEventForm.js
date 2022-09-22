//Styled Components
import { StyledNewEventForm } from "../styles/NewEventForm.styled";

function Form() {
  return (
    <StyledNewEventForm>
        <input placeholder="Where?"></input>
        <input placeholder="When?"></input>
        <input placeholder="Which board game?"></input>
        <input placeholder="How many players?"></input>
        <select>
            <option selected value="level-of-difficulty">Level of difficulty</option>
            <option value="easy">Easy</option>
            <option value="intermediate">Intermediate</option>
            <option value="hard">Hard</option>
        </select>
        <input placeholder="Average time of play"></input>
        <button>Submit</button>
    </StyledNewEventForm>
  );
}

export default Form;
