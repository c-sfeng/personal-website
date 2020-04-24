import * as React from 'react';
import './css/Header.scss';
import { HashRouter as Router, Link } from 'react-router-dom';

export class NavTab extends React.Component {
    render () {
        const { title, url, selected} = this.props;
        if (selected === true) {
            return (               
                <div className="current-tab navigation-tab">
                    <Link to={url}> 
                        <h4>{title}</h4>
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="navigation-tab">
                    <Link to={url}>
                        <h4>{title}</h4>
                    </Link>
                </div>
            );
        }
    }
}