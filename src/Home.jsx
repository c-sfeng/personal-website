import React from 'react';
import { PrimaryBanner } from './PrimaryBanner.jsx';
import Portfolio from './Portfolio.jsx';
import { Banner } from './Banner.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { content } from './assets/content';
import './css/App.scss';

const Home = () => {
  document.title = 'Home | Clarence Feng';

  return (
    <div className="App">
      <Header selected={1}/>
      <div className="container">
        <PrimaryBanner 
          imgURL={content.home.images.primaryImage} 
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
      <Portfolio/>
      <Banner imgURL={content.home.images.projectsImage} url={content.urls.projectsURL} title="PROJECTS" translucent={true}/>
      <Banner imgURL={content.home.images.resumeImage} url={content.urls.resumeURL} title="RESUME" translucent={false}/>
      <Footer/>
    </div>
  );
}

export default Home;
