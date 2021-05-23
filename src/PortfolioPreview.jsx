import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/Portfolio.scss';
import './css/App.scss';

const PortfolioPreview = (props) => {
  const [height, setHeight] = useState(530);
  const { imgURL, url, title } = props;

  const updateDimensions = () => {
    const containerHeight = document.getElementById('portfolio-previews').clientWidth * 0.47;
    const containerHeightNorm = document.getElementById('portfolio-previews').clientWidth * 0.75;
    if (window.innerWidth >= 992) setHeight(containerHeightNorm);
    else setHeight(containerHeight);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className="container col-sm portfolio-previews" id="portfolio-previews" style={{ height: `${height}px` }}>
      <Link to={url} style={{ textDecoration: 'none' }}>
        {/* eslint-disable-next-line */}
        <div className="portfolio-preview-image" style={{ backgroundImage: `url("${require(`${imgURL}`)}")` }}>
          <div className="translucent-overlay" />
          <div className="portfolio-name">
            <h3>
              {title}
              {' '}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioPreview;

PortfolioPreview.propTypes = {
  imgURL: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
