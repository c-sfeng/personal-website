import React from 'react';
import PrimaryBanner from './PrimaryBanner';
import Portfolio from './Portfolio';
import Banner from './Banner';
import Header from './Header';
import Footer from './Footer';
import content from './assets/content';
import './css/App.scss';

const Home = () => {
  document.title = 'Home | Clarence Feng';

  return (
    <div className="App">
      <Header selected={1} />
      <PrimaryBanner
        imgURL={content.home.images.primaryImage}
        title={content.home.primaryTitle}
        subtitle={content.home.primarySubtitle}
      />
      <div className="container body-container">
        <p className="primary-text">
          {content.home.textParagraphOne}
        </p>
        <p className="primary-text">
          {content.home.textParagraphTwo}
        </p>
      </div>
      <Portfolio />
      <Banner imgURL={content.home.images.projectsImage} url={content.urls.projectsURL} title="PROJECTS" translucent />
      <Banner imgURL={content.home.images.resumeImage} url={content.urls.resumeURL} title="RESUME" translucent={false} />
      <Footer />
    </div>
  );
};

export default Home;
