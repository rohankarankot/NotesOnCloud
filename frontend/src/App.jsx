import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotePasswordState from "./context/notePasswords/NotePasswordState";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Register from "./components/Register";
import { useContext, useState } from "react";
// import AlertContext from "../context/ShowAlert";
import ShowModal from "./components/ShowModal";
function App() {
  const [alert, setAlert] = useState(null);
  // const { ShowAlert } = useContext(AlertContext);
  return (
    <>
      <div
        style={{
          position: "relative",
          minHeight: "85vh",
        }}
      >
        <NotePasswordState>
          <Router>
            <NavBar />
            <div className="container col-6">
              {/* <Alert alert={alert} /> */}
            </div>
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/landing">
                  <LandingPage />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/register">
                  <Register />
                </Route>
              </Switch>
            </div>
            <Footer />
          </Router>
        </NotePasswordState>
        <ShowModal turnOn={true} />
      </div>
    </>
  );
}

export default App;
