import * as React from "react";

//React Components
import SignUpInfo from "./SignupInfo";
import PersonalInfo from "./PersonalInfo";

//API Calls
import { UserApi } from "../../api/index";

//MUI Library
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//ReactRouter
import { NavLink, useNavigate } from "react-router-dom";

//Styled Components
import { StyledFormTitle, StyledSubTitle, StyledButtonContainer,  StyledButton } from "../styles/SignupForm.styled";

const theme = createTheme();

export default function SignUp() {
  let navigate = useNavigate(); //* for redirecting to another page.
  
  //Initialise state in parent component and pass it as props to children
  const [formData, setFormData] = React.useState({
    firstName:"",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
    dateOfBirth: "",
    validationId: "",
    favBoardGame:[],
    // favBoardGames: [], for multiple selection
  })

  //Create a 2-step sign up form
  const [page, setPage] = React.useState(0);

  const formStepTitle = ["Sign up Information", "Personal Information"];

  function prevStep() {
    setPage(currPage => currPage - 1)
  }

  function nextStep() {
    setPage(currPage => currPage + 1)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
   
     
  };

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
          <StyledFormTitle>Sign up</StyledFormTitle>
          <div>
            
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <StyledSubTitle>
                <h1>Step {page + 1} - {formStepTitle[page]}</h1>
              </StyledSubTitle>
              {/* Conditionally render form based on which page we are on */}
              {page === 0 ? <SignUpInfo formData={formData} setFormData={setFormData}/> : <PersonalInfo formData={formData} setFormData={setFormData}/>}
              <StyledButtonContainer>
                <StyledButton
                  onClick={prevStep}
                  disabled={page === 0}
                >
                  Previous
                </StyledButton>
                <StyledButton
                  onClick={page === 0 ? nextStep : ()=>UserApi.signUp(formData).then(() => {
                    navigate('/' )
                  })}
                  type={page === 0 ? "button" : "submit"}
                >
                  {page===0 ? "Next": "Submit"}
                </StyledButton>
              </StyledButtonContainer>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <NavLink
                    to="/login"
                    style={{
                      fontFamily: "Poppins",
                      color: "tomato",
                      fontSize: ".9em",
                    }}
                  >
                    Already have an account? Sign in
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
