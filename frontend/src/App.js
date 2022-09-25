import React from "react"

//React Router
import { Route, Routes } from "react-router-dom";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Homepage/Home";
import About from "./components/About/About";
import SignUp from "./components/Signup/SignupForm";
import Login from "./components/Login/LoginForm";
import SearchPage from "./components/SearchPage/SearchPage";
import Event from "./components/EventPage/Event";
import HostEvent from "./components/HostEvent/HostEvent";
import UserProfile from "./components/UserProfile/UserProfile";
//Styled components
import GlobalStyles from "./components/styles/Global";
import { StyledApp } from "./components/styles/App.styled"

function App() {
  //Hardcoded state values - to be changed
  const [event, setEvent] = React.useState({
    eventId: "",
    title:"Monopoly",
    level:"Easy",
    hostedBy:"Maria",
    location:"Thessaloniki",
    date:"22-09-2022",
    leftSeats:6,
    totalSeats:6
})

  return (
    <StyledApp>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/signup" element ={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/session">
          {/* Nested Routes */}
          <Route path="search" element={<SearchPage event={event} setEvent = {setEvent}/>}/>
          <Route path=":id" element={<Event event={event} setEvent = {setEvent}/>}/>
          <Route path="host-new" element={<HostEvent />}/>
        </Route>
        <Route path="/profile/:id" element={<UserProfile />}/>
      </Routes>
      <Footer />
    </StyledApp>
  );
}

export default App;
