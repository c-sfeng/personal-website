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
            student at the University of New South Wales. Currently,
            I am working - passion for photography, design and 
            audio-visual production. studying computer science.
            interest in education, history and a while load of random 
            shit Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Phasellus sit amet gravida magna, a egestas leo. 
            Aliquam ornare turpis vel fringilla facilisis. Nulla id 
            suscipit urna. Integer finibus ac nulla quis pharetra. 
            Nullam sagittis lectus eget elementum molestie. 
            Phasellus eget convallis odio, ut interdum ante. 
            Proin id dui nibh. Proin scelerisque turpis ligula, 
            blandit tristique lectus vestibulum at. Donec a purus 
            dignissim, dapibus libero quis, pretium ipsum.
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
