import "./App.css";
//React Router
import { Route, Routes } from "react-router-dom";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Homepage/Home";
import About from "./components/About/About";
import Signup from "./components/Signup/SignupForm";
import Login from "./components/Login/LoginForm";
import SearchPage from "./components/SearchPage/SearchPage";
import Event from "./components/EventPage/Event";
import HostEvent from "./components/HostEvent/HostEvent";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/signup" element ={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/session/search" element={<SearchPage />}/>
        <Route path="/session/:id" element={<Event />}/>
        <Route path="/session/host-new" element={<HostEvent />}/>
        <Route path="/profile/:id" element={<UserProfile />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
