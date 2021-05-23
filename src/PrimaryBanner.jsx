import React from "react";
import './css/PrimaryBanner.scss';
import './css/App.scss';
import { useState } from "react";
import { useEffect } from "react";

const PrimaryBanner = (props) => {
  const { imgURL, title, subtitle } = props;
  const [height, setHeight] = useState(530);

  const updateDimensions = () => {
    let containerHeight = document.getElementById('primary-banner').clientWidth * 0.47;
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
    <div className="container">
      <div className="banner-primary" id='primary-banner' style={{height: height + 'px'}}>
        <div className="banner-primary-image" style={{backgroundImage: 'url("' + require(`${imgURL}`) + '")'}}>
          <div className="translucent-overlay"></div>
          <div className="banner-primary-text">
            <h1 className="banner-primary-title">
              {title}
            </h1>
            <h3 className="banner-primary-subtitle">
              {subtitle}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrimaryBanner;
