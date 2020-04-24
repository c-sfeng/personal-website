import * as React from "react";
import './css/Banner.scss';
import { Link } from 'react-router-dom';

export class Banner extends React.Component {
    render () {
        const { imgURL, url, title, translucent } = this.props;
        if (translucent === true) {
            return (
                <Link to={url} style={{textDecoration: "none"}}>
                    <div className="banner-standard banner-standard-white">
                        <div className="banner-image" style={{backgroundImage: 'url("' + imgURL + '")'}}>
                            <div className="translucent-overlay"></div>
                            <div className="banner-text">
                                <h2>{title}</h2>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        } else {
            return (
                <Link to={url} style={{textDecoration: "none"}}>
                    <div className="banner-standard banner-standard-black">
                        <div className="banner-image" style={{backgroundImage: 'url("' + imgURL + '")'}}>
                            <div className="banner-text-black">
                                <h2>{title}</h2>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
    }
}