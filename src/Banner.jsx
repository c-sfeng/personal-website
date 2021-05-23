import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Banner.scss';

const Banner = (props) => {
    const { imgURL, url, title, translucent } = props;
    const [height, setHeight] = useState(530);

    const updateDimensions = () => {
        let containerHeight = document.getElementById('banner-standard').clientWidth * 0.47;
        setHeight(containerHeight);
    }
    
    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        }
    }, []);

    return (
        <div className="container body-container">
            <Link to={url} style={{textDecoration: "none"}}>
                <div
                    id="banner-standard"
                    className={translucent ? "banner-standard banner-standard-white" : "banner-standard banner-standard-black"}
                    style={{height: height + 'px'}}
                >
                    <div className="banner-image" style={{backgroundImage: 'url("' + require(`${imgURL}`) + '")'}}>
                        {translucent && <div className="translucent-overlay"></div>}
                        <div className={translucent ? "banner-text" : "banner-text-black"}>
                            <h2>
                                {title}
                            </h2>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Banner;
