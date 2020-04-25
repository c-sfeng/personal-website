import React from 'react';
import { PrimaryBanner } from './PrimaryBanner.jsx';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import projectsBanner from "./assets/projects-banner.jpg";
import './css/App.scss';

function ProjectsPage() {
    return (
        <div className="App">
            <div className="container">
                <Header selected={4}/>
            </div>
            <div className="container">
                <PrimaryBanner imgURL={projectsBanner}
                    title="PROJECTS"
                    subtitle=""/>
            </div>
            <div className="container end-container">
                <Footer/>
            </div>
        </div>
    );
}

export default ProjectsPage;