import * as React from 'react';
import './css/Header.scss';

export class NavTab extends React.Component {
    handleClick = () => {

    }
    
    render () {
        const { title, url, selected} = this.props;
        if (selected === true) {
            return (
                <div className="current-tab navigation-tab">
                    <a href={url}>
                        <h4 onClick={this.handleClick}>{title}</h4>
                    </a>
                </div>
            );
        } else {
            return (
                <div className="navigation-tab">
                    <a href={url}>
                        <h4 onClick={this.handleClick}>{title}</h4>
                    </a>
                </div>
            );
        }
    }
}