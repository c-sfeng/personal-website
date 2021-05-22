import React from 'react';
import NavTab from './NavTab.jsx';
import './css/Header.scss';
import { content } from './assets/content';

const Header = (props) => {
    const { selected } = props;
    return(
        <div className="container">
            <div className="navigation-norm">
                <NavTab
                    title={content.header.home}
                    url={content.urls.homeURL}
                    selected={selected === 1}
                    />
                <NavTab
                    title={content.header.gallery}
                    url={content.urls.galleryURL}
                    selected={selected === 2}
                    />
                <NavTab
                    title={content.header.projects}
                    url={content.urls.projectsURL}
                    selected={selected === 3}
                    />
                <NavTab
                    title={content.header.resume}
                    url={content.urls.resumeURL}
                    selected={selected === 4}
                    />
            </div>
        </div>
    );
}

export default Header;