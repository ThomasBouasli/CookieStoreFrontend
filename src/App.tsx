import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import LandingPage from "./Pages/LandingPage";
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <ReactNotifications />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
