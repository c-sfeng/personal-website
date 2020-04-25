import React from "react";
import './css/PrimaryBanner.scss';
import './css/App.scss';

export class PrimaryBanner extends React.Component {
  render() {
    const { imgURL, title, subtitle } = this.props;
    return (
      <div className="banner-primary">
        <div className="banner-primary-image" style={{backgroundImage: 'url("' + imgURL + '")'}}>
          <div className="translucent-overlay"></div>
          <div className="banner-primary-text">
            <h1 className="banner-primary-title">{title}</h1>
            <h3 className="banner-primary-subtitle">{subtitle}</h3>
          </div>
        </div>
      </div>
    );
  }
}
