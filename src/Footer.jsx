import React from 'react';
import './css/Footer.scss';
import { content } from './assets/content';

export class Footer extends React.Component {
    render() {
        return(
            <div className="footer-master">
                <p className="footer-text">{content.footer.copyright}</p>
            </div>
        );
    }
}