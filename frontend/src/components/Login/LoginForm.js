import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//ReactRouter
import { NavLink , useNavigate} from "react-router-dom";

//Styled Components
import { StyledFormTitle, StyledButton } from "../styles/SignupForm.styled";
import { UserApi } from "../../api/index";

const theme = createTheme();

export default function Login() {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    UserApi.login({
      'email': data.get('email'),
      'password': data.get('password'),
    }).then(() => {
      navigate('/profile/' )
    })
  };


return (
  <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <StyledFormTitle>
          Sign in
        </StyledFormTitle>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <StyledButton>
            Sign In
          </StyledButton>
          <Grid container>
            <Grid item xs>
              <NavLink style={{ fontFamily: 'Poppins', color: "tomato", fontSize: '.9em' }}>
                Forgot password?
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink to="/signup" style={{ fontFamily: 'Poppins', color: "tomato", fontSize: '.9em' }}>
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
);
}