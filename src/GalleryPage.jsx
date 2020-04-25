import React from 'react';
import primaryImage from './assets/primary.png';
import projectsImage from './assets/projects.png';
import resumeImage from './assets/resume.png';
import './css/App.scss';
import { PrimaryBanner } from './PrimaryBanner.jsx';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

function GalleryPage() {
    return (
        <div className="App">
            <div className="container">
                <Header selected={3}/>
            </div>
            <p>test</p>
            <div className="container end-container">
                <Footer/>
            </div>
        </div>
    );
}

export default GalleryPage;