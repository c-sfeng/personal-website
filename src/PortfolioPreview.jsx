import React from "react";
import { Link } from 'react-router-dom';
import './css/Portfolio.scss';
import './css/App.scss';

export class PortfolioPreview extends React.Component {
    constructor() {
        super();
        this.state = {
            height: "530px"
        }
    }
    
    updateDimensions() {
        let containerHeight = document.getElementsByClassName('portfolio-previews')[0].clientWidth * 0.47;
        let containerHeightNorm = document.getElementsByClassName('portfolio-previews')[0].clientWidth * 0.75;
        if (window.innerWidth >= 992) {
            this.setState({
                height: containerHeightNorm
            });
        } else {
            this.setState({
                height: containerHeight
            });
        }
    }
    
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        const { imgURL, url, title } = this.props;
        return (
            <div className="container col-sm portfolio-previews" style={{height: this.state.height + 'px'}}>
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