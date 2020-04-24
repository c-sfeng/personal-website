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
      <div className="container">
        <Header/>
      </div>
      <div className="container">
        <div className="sub-container">
          <PrimaryBanner imgURL={primaryImage} 
            title="CLARENCE FENG"
            subtitle="SOFTWARE ENGINEER & PHOTOGRAPHER"/>
        </div>
      </div>
      <div className="container body-container">
        <div className="sub-container">
          <p className="primary-text">
            Hi, I’m Clarence, a 2nd year Science and Computer Science
            student at the University of New South Wales. When I'm not
            studying or working, I'll be reading or doing photography.
            I maintain a personal and professional portfolio in 
            photography, and I'm exploring design and audio-visual
            production as a Media Director in UNSW's CSESoc. In the future,
            I hope to work in education, but my current focus is on
            software engineering. Currently, I am working as a front and back-end intern at Intuit
            Australia, and I'm also working on some side projects like this website. 
            If you'd like to know more about what I've done, it's all below.
            Thanks for visiting!
          </p>
        </div>
      </div>
      <div className="container body-container">
        <div className="sub-container">
          <Portfolio/>
        </div>  
      </div>
      <div className="container body-container">
        <div className="sub-container">
          <Banner imgURL={projectsImage} title="PROJECTS" translucent={true}/>
        </div>
      </div>
      <div className="container body-container">
        <div className="sub-container">
          <Banner imgURL={resumeImage} title="RESUME" translucent={false}/>
        </div>
      </div>
      <div className="container end-container">
        <div className="sub-container">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
