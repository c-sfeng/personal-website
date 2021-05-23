import React from 'react';
import './css/Footer.scss';
import content from './assets/content';

const Footer = () => (
  <div className="container end-container">
    <div className="footer-master">
      <p className="footer-text">
        {content.footer.updated}
      </p>
    </div>
  </div>
);

export default Footer;
