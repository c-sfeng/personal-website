import React from 'react';
import primaryImage from './assets/primary.png';
import projectsImage from './assets/projects.png';
import resumeImage from './assets/resume.png';
import './css/App.scss';
import {  Booton } from './Button.jsx';
import { PrimaryBanner } from './PrimaryBanner.jsx';
import { Portfolio } from './Portfolio.jsx';
import { Banner } from './Banner.jsx';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

function App() {
  return (
    <div className="App">
      <div className="norm-container">
        <Header/>
      </div>
      <div className="norm-container">
        <div className="sub-container">
          <PrimaryBanner imgURL={primaryImage} 
            title="CLARENCE FENG"
            subtitle="SOFTWARE ENGINEER & PHOTOGRAPHER"/>
        </div>
      </div>
      <div className="norm-container body-container">
        <div className="sub-container">
          <p className="primary-text">
            Hi, I’m Clarence, a 2nd year Science and Computer Science
            student at the University of New South Wales, majoring in Mathematics and Computer Science. 
            Additionally, I currently work as an academic tutor, and as a front and back-end software enineer intern at
            Intuit Australia. 
          </p>
          <p className="primary-text">
            When I'm not studying or working, I'll be reading, watching films or taking photos.
            In the future, I hope to turn my hobbies into something more, as I 
            maintain both a personal and professional portfolio in 
            photography, and I'm exploring design, film-making and audio-visual
            production not just in a personal capacity, but also as a Media Director in UNSW's Computer Science 
            and Engineering Society. If you'd like to know more about what I've done, you'll find more details below.
            Thanks for visiting!
          </p>
        </div>
      </div>
      <div className="norm-container body-container">
        <div className="sub-container">
          <Portfolio/>
        </div>  
      </div>
      <div className="norm-container body-container">
        <div className="sub-container">
          <Banner imgURL={projectsImage} title="PROJECTS" translucent={true}/>
        </div>
      </div>
      <div className="norm-container body-container">
        <div className="sub-container">
          <Banner imgURL={resumeImage} title="RESUME" translucent={false}/>
        </div>
      </div>
      <div className="norm-container end-container">
        <div className="sub-container">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
