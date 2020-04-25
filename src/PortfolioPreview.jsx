import * as React from "react";
import './css/Portfolio.scss';
import './css/App.scss';
import { Link } from 'react-router-dom';

export class PortfolioPreview extends React.Component {
    render() {
        const { imgURL, url, title } = this.props;
        return (
            <div className="col-sm portfolio-previews">
                <Link to={url} style={{textDecoration: "none"}}>
                        <div className="portfolio-preview-image" style={{backgroundImage: 'url("' + imgURL + '")'}}>
                            <div className="translucent-overlay"></div>
                            <div className="portfolio-name">
                                <h3>{title} </h3>
                            </div>
                        </div>
                </Link>
            </div>
        );
    }
}