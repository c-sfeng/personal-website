import React from "react";
import { PortfolioPreview } from "./PortfolioPreview.jsx";
import './css/Portfolio.scss';
import './css/App.scss';
import { content } from './assets/content';

const Portfolio = () => {
    return (
          <div className="container body-container">
            <div className="portfolio-master">
                <h2 className="portfolio-title">{content.home.portfolioExplore}</h2>
                <div className="row portfolio-preview-row">
                    <PortfolioPreview 
                        imgURL={content.home.images.portfolioOne} 
                        url={content.urls.galleryPersonalURL} 
                        title={content.home.portfolioPersonal}/>
                    <PortfolioPreview 
                        imgURL={content.home.images.portfolioTwo} 
                        url={content.urls.galleryProfessionalURL} 
                        title={content.home.portfolioProfessional}/>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;