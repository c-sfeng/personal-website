import React from 'react';
import { PrimaryBanner } from './PrimaryBanner.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './css/App.scss';
import { content } from "./assets/content";

const ProjectsPage = () => {
    document.title = 'Projects | Clarence Feng';

    return (
        <div className="App">
            <Header selected={3}/>
            <div className="container">
                <PrimaryBanner imgURL={content.projects.images.primaryImage}
                    title={content.header.projects}
                    subtitle={content.projects.projectsSubtitle}/>
            </div>
            <Footer/>
        </div>
    );
}

export default ProjectsPage;