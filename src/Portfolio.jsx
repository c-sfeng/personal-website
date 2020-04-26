import React from "react";
import { PortfolioPreview } from "./PortfolioPreview.jsx";
import './css/Portfolio.scss';
import './css/App.scss';
import content from './assets/content.json';

export class Portfolio extends React.Component {
    render () {
        return (
            <div className="portfolio-master">
                <h2 className="portfolio-title">{content.home.portfolioExplore}</h2>
                <div className="row portfolio-preview-row">
                    <PortfolioPreview 
                        imgURL={require(`${content.home.images.portfolioOne}`)} 
                        url={content.urls.galleryPersonalURL} 
                        title={content.home.portfolioPersonal}/>
                    <PortfolioPreview 
                        imgURL={require(`${content.home.images.portfolioTwo}`)} 
                        url={content.urls.galleryProfessionalURL} 
                        title={content.home.portfolioProfessional}/>
                </div>
            </div>
        );
    }
}