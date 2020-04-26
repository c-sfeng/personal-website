import React from 'react';
import { PrimaryBanner } from './PrimaryBanner.jsx';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import './css/App.scss';
import content from "./assets/content.json";

function ProjectsPage() {
    return (
        <div className="App">
            <div className="container">
                <Header selected={3}/>
            </div>
            <div className="container">
                <PrimaryBanner imgURL={require(`${content.projects.images.primaryImage}`)}
                    title={content.header.projects}
                    subtitle={content.projects.projectsSubtitle}/>
            </div>
            <div className="container end-container">
                <Footer/>
            </div>
        </div>
    );
}

export default ProjectsPage;