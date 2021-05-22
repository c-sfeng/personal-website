import React from 'react';
import { Link } from 'react-router-dom';
import './css/Banner.scss';

export class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            height: "530px"
        }
    }
    
    updateDimensions() {
        let containerHeight = document.getElementsByClassName('banner-standard')[0].clientWidth * 0.47;
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

    render () {
        const { imgURL, url, title, translucent } = this.props;
        return (
            <div className="container body-container">
                <Link to={url} style={{textDecoration: "none"}}>
                    <div 
                        className={translucent ? "banner-standard banner-standard-white" : "banner-standard banner-standard-black"}
                        style={{height: this.state.height + 'px'}}
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
}
