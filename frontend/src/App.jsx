import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotePasswordState from "./context/notePasswords/NotePasswordState";
// import { useEffect } from "react";
// import ShowModal from "./components/ShowModal";

function App() {
  return (
    <>
      {/* <ShowModal turnOn={true} /> */}
      <NotePasswordState>
        <Router>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </NotePasswordState>
    </>
  );
}

export default App;
