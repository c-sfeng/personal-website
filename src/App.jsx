import React from 'react';
import { 
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home.jsx";
import ResumePage from "./ResumePage.jsx";
import GalleryPage from "./GalleryPage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";
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
          <Route exact path="/gallery">
            <GalleryPage />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
