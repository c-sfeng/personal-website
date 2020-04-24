import React from 'react';
import { 
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home.jsx";
import ResumePage from "./ResumePage.jsx";
import './css/App.scss';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/resume">
            <ResumePage />
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;
