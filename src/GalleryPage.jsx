import React from 'react';
import { PrimaryBanner } from './PrimaryBanner.jsx';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import test1 from "./assets/gallery/gallery-test-1.jpg";
import test2 from "./assets/gallery/gallery-test-2.jpg";
import test3 from "./assets/gallery/gallery-test-3.jpg";
import test4 from "./assets/gallery/gallery-test-4.jpg";
import test5 from "./assets/gallery/gallery-test-5.jpg";
import test6 from "./assets/gallery/gallery-test-6.jpg";
import test7 from "./assets/gallery/gallery-test-7.jpg";
import './css/App.scss';
import './css/GalleryPage.scss';
import content from "./assets/content.json";

function GalleryPage() {
    return (
        <div className="App">
            <div className="container">
                <Header selected={2}/>
            </div>
            <div className="container">
                <PrimaryBanner imgURL={require(`${content.gallery.images.primaryImage}`)}
                    title={content.header.gallery}
                    subtitle={content.gallery.gallerySubtitle}/>
            </div>
            <div className="container body-container card-columns" id="personal">
                <div class="card">
                    <img src={test1} class="card-img-top"></img>
                </div>
                <div class="card">
                    <img src={test2} class="card-img-top"></img>
                </div>
                <div class="card">
                    <img src={test3} class="card-img-top"></img>
                </div>
                <div class="card">
                    <img src={test4} class="card-img-top"></img>
                </div>
                <div class="card">
                    <img src={test5} class="card-img-top"></img>
                </div>
                <div class="card">
                    <img src={test6} class="card-img-top"></img>
                </div>
                <div class="card">
                    <img src={test7} class="card-img-top"></img>
                </div>
            </div>
            <div className="container end-container">
                <Footer/>
            </div>
        </div>
    );
}

export default GalleryPage;