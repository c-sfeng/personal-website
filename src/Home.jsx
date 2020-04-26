import React from 'react';
import { PrimaryBanner } from './PrimaryBanner.jsx';
import { Portfolio } from './Portfolio.jsx';
import { Banner } from './Banner.jsx';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import content from './assets/content.json';
import './css/App.scss';

function Home() {
  return (
    <div className="App">
      <div className="container">
        <Header selected={1}/>
      </div>
      <div className="container">
        <PrimaryBanner imgURL={require(`${content.home.images.primaryImage}`)} 
          title={content.home.primaryTitle}
          subtitle={content.home.primarySubtitle}/>
      </div>
      <div className="container body-container">
        <p className="primary-text">
          {content.home.textParagraphOne}
        </p>
        <p className="primary-text">
          {content.home.textParagraphTwo}
        </p>
      </div>
      <div className="container body-container">
        <Portfolio/>
      </div>
      <div className="container body-container">
        <Banner imgURL={require(`${content.home.images.projectsImage}`)} url={content.urls.projectsURL} title="PROJECTS" translucent={true}/>
      </div>
      <div className="container body-container">
        <Banner imgURL={require(`${content.home.images.resumeImage}`)} url={content.urls.resumeURL} title="RESUME" translucent={false}/>
      </div>
      <div className="container end-container">
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
