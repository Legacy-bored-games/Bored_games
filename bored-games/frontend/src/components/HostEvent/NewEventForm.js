// //Styled Components
// import { StyledNewEventForm } from "../styles/HostEventPage.styled";

// function Form() {
//   return (
//     <StyledNewEventForm>
//         <input placeholder="Where?"></input>
//         <input placeholder="When?"></input>
//         <input placeholder="Which board game?"></input>
//         <input placeholder="How many players?"></input>
//         <select>
//             <option selected value="level-of-difficulty">Level of difficulty</option>
//             <option value="easy">Easy</option>
//             <option value="intermediate">Intermediate</option>
//             <option value="hard">Hard</option>
//         </select>
//         <input placeholder="Average time of play"></input>
//         <button>Submit</button>
//     </StyledNewEventForm>
//   );
// }

// export default Form;

import * as React from "react";

//MUI Library
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//Styled Components
import { StyledTitle, StyledButton } from "../styles/HostEventPage.styled";

//API Calls
import { BoardGameApi, EventApi } from "../../api/index";

import { useNavigate } from "react-router-dom";
export default function Form() {
  const navigate = useNavigate(); //* for redirecting to another page.
  const [boardGamecs, setBoardGamecs] = React.useState([]);
  const [formData, setFormData] = React.useState({
    where: "",
    when: "",
    boardGame: "",
    howManyPlayers: 0,
    levelOfDifficulties: "",
    averageDuration: 0,
    participantUser: [JSON.parse(localStorage.getItem('userId')).id],
    creatorUser: JSON.parse(localStorage.getItem('userId')).id,

  });

  //Handle change of multiple inputs
  function handleChange(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  //Hardcoded cities - to be changed
  const city = ["Athens", "Thessaloniki", "Kavala"].map((city) => {
    return (
      <MenuItem key={city} value={city}>
        {city}
      </MenuItem>
    );
  });


  //* for fill in the board game name and get the id from the API 
  React.useEffect(() => {
    //  BoardGameApi.getBoardGames().then(res =>setFormData((prevData) => {
    //   return {
    //     ...prevData,
    //     boardGame: res.data,
    //   };
    // }))
    BoardGameApi.getBoardGames().then(res => setBoardGamecs(res.data))
  }, []);



  // const boardGame =Object.values(formData.boardGame).map((boardGame) => {
  //* for fill in the board game name and get the id from the API  
  const boardGame = boardGamecs.map((boardGame) => {
    return (
      <MenuItem key={boardGame._id} value={boardGame}>
        {boardGame.name}
      </MenuItem>
    );
  });

  const level = ["Easy", "Intermediate", "Hard"].map((level) => {
    return (
      <MenuItem key={level} value={level}>
        {level}
      </MenuItem>
    );
  });
  const duration = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300].map(
    (duration) => {
      return (
        <MenuItem key={duration} value={duration}>
          {duration}
        </MenuItem>
      );
    }
  );
  //* for submit the form and redirect to the event page
  async function submitAndNavigate() {
    await EventApi.newEvent(formData).then((res) => {
      navigate(`/session/${res._id}`)
    })
  }




  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <StyledTitle>
                  Create Board Game session
                </StyledTitle>
              </Grid >
              <Grid item xs={12} sm={12}>
                {/* Select city from dropdown menu */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Where?*</InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="where"
                    label="Where?"
                    name="where"
                    value={formData.city}
                    onChange={handleChange}
                  >
                    {city}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>When?*</InputLabel>
                <TextField
                  required
                  fullWidth
                  id="eventDate"
                  type="Date"
                  name="when"
                  value={formData.eventDate}
                  onChange={handleChange}
                  autoComplete="eventDate"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                {/* Select board game from dropdown menu */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Which Board Game?*
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="boardGame"
                    label="Which Board Game?"
                    name="boardGame"
                    value={formData.boardGame}
                    onChange={handleChange}
                  >
                    {boardGame}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>How many players?</InputLabel>
                <TextField
                  fullWidth
                  id="numOfPlayers"
                  type="Number"
                  name="howManyPlayers"
                  value={formData.numOfPlayers}
                  onChange={handleChange}
                  autoComplete="number of players"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                {/* Select level from dropdown menu */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Level of difficulty
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="level"
                    label="Level of difficulty"
                    name="levelOfDifficulties"
                    value={formData.level}
                    onChange={handleChange}
                  >
                    {level}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                {/* Select duration from dropdown menu */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Average duration of play (in minutes)
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="duration"
                    label="Average duration of play (in minutes)"
                    name="averageDuration"
                    value={formData.duration}
                    onChange={handleChange}
                  >
                    {duration}
                  </Select>
                </FormControl>
                <StyledButton onClick={submitAndNavigate} type="submit">Submit</StyledButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
