import React from "react";
import { Link } from 'react-router-dom';
import './css/Portfolio.scss';
import './css/App.scss';
import { useState } from "react";
import { useEffect } from "react";

const PortfolioPreview = (props) => {
    const [height, setHeight] = useState(530);
    const { imgURL, url, title } = props;

    const updateDimensions = () => {
        let containerHeight = document.getElementById('portfolio-previews').clientWidth * 0.47;
        let containerHeightNorm = document.getElementById('portfolio-previews').clientWidth * 0.75;
        window.innerWidth >= 992 ? setHeight(containerHeightNorm) : setHeight(containerHeight);
    }

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        }
    }, []);

    return (
        <div className="container col-sm portfolio-previews" id="portfolio-previews" style={{height: height + 'px'}}>
            <Link to={url} style={{textDecoration: "none"}}>
                    <div className="portfolio-preview-image" style={{backgroundImage: 'url("' + require(`${imgURL}`) + '")'}}>
                        <div className="translucent-overlay"></div>
                        <div className="portfolio-name">
                            <h3>{title} </h3>
                        </div>
                    </div>
            </Link>
        </div>
    );

}

export default PortfolioPreview;
