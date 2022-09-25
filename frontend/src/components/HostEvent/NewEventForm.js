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

export default function Form() {
  const [formData, setFormData] = React.useState({
    city: "",
    eventDate: "",
    boardGame: "",
    numOfPlayers: 0,
    level: "",
    duration: 0,
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

  //Hardcoded board games - to be changed
  const boardGame = ["Monopoly", "Munchkin", "Scrubble"].map((boardGame) => {
    return (
      <MenuItem key={boardGame} value={boardGame}>
        {boardGame}
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
                    id="city"
                    label="Where?"
                    name="city"
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
                  name="eventDate"
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
                  name="numOfPlayers"
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
                    name="level"
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
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                  >
                    {duration}
                  </Select>
                </FormControl>
                <StyledButton type="submit">Submit</StyledButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
