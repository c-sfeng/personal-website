import * as React from "react";
import { PortfolioPreview } from "./PortfolioPreview.jsx";
import portfolioOne from "./assets/portfolio1.jpg";
import portfolioTwo from "./assets/portfolio2.jpg";
import './css/Portfolio.scss';
import './css/App.scss';

export class Portfolio extends React.Component {
    render () {
        return (
            <div className="portfolio-master">
                <h2 className="portfolio-title">EXPLORE MY PORTFOLIO</h2>
                <div className="row portfolio-preview-row">
                    <PortfolioPreview imgURL={portfolioOne} title="PERSONAL"/>
                    <PortfolioPreview imgURL={portfolioTwo} title="PROFESSIONAL"/>
                </div>
            </div>
        );
    }
}