import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotePasswordState from "./context/notePasswords/NotePasswordState";
function App() {
  return (
    <>
      <NotePasswordState>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </NotePasswordState>
    </>
  );
}

export default App;
