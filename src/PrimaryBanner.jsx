import React from "react";
import './css/PrimaryBanner.scss';
import './css/App.scss';

export class PrimaryBanner extends React.Component {
  constructor() {
    super();
    this.state = {
      height: "530px"
    }
  }

  updateDimensions() {
    let containerHeight = document.getElementsByClassName('banner-primary')[0].clientWidth * 0.47;
    this.setState({
      height: containerHeight
    });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const { imgURL, title, subtitle } = this.props;
    return (
      <div className="banner-primary" id='primary-banner' style={{height: this.state.height + 'px'}}>
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
