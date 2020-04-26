import React from 'react';
import { 
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import Home from "./Home.jsx";
import ResumePage from "./ResumePage.jsx";
import GalleryPage from "./GalleryPage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";
import './css/App.scss';

const trackingId = "UA-164566626-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen((location) => {
  let loc = location.hash;
  if (location.hash.substring(2)) {
    loc = location.hash.substring(2);
  } else {
    loc = "home";
  }
  ReactGA.set({ page: loc }); // Update the user's current page
  ReactGA.pageview(loc); // Record a pageview for the given page
});

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
