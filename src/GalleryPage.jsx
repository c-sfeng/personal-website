import React from 'react';
import { PrimaryBanner } from './PrimaryBanner.jsx';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import galleryBanner from './assets/gallery-banner.jpg';
import './css/App.scss';

function GalleryPage() {
    return (
        <div className="App">
            <div className="container">
                <Header selected={3}/>
            </div>
            <div className="container">
                <PrimaryBanner imgURL={galleryBanner}
                    title="GALLERY"
                    subtitle=""/>
            </div>
            <div className="container end-container">
                <Footer/>
            </div>
        </div>
    );
}

export default GalleryPage;