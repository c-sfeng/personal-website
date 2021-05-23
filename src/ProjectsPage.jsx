import React from 'react';
import PrimaryBanner from './PrimaryBanner';
import Header from './Header';
import Footer from './Footer';
import './css/App.scss';
import content from './assets/content';

const ProjectsPage = () => {
  document.title = 'Projects | Clarence Feng';

  return (
    <div className="App">
      <Header selected={3} />
      <PrimaryBanner
        imgURL={content.projects.images.primaryImage}
        title={content.header.projects}
        subtitle={content.projects.projectsSubtitle}
      />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
