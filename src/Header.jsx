import React from 'react';
import { NavTab } from './NavTab.jsx';
import './css/Header.scss';
import content from './assets/content.json';

export class Header extends React.Component {
    render() {
        const { selected } = this.props;
        if (selected === 1) {
            return(
                <div className="navigation-norm">
                    <NavTab title={content.header.home} url={content.urls.homeURL} selected={true}/>
                    <NavTab title={content.header.gallery} url={content.urls.galleryURL} selected={false}/>
                    <NavTab title={content.header.projects} url={content.urls.projectsURL} selected={false}/>
                    <NavTab title={content.header.resume} url={content.urls.resumeURL} selected={false}/>
                </div>
            );
        } else if (selected === 2) {
            return(
                <div className="navigation-norm">
                    <NavTab title={content.header.home} url={content.urls.homeURL} selected={false}/>
                    <NavTab title={content.header.gallery} url={content.urls.galleryURL} selected={true}/>
                    <NavTab title={content.header.projects} url={content.urls.projectsURL} selected={false}/>
                    <NavTab title={content.header.resume} url={content.urls.resumeURL} selected={false}/>
                </div>
            );
        } else if (selected === 3) {
            return(
                <div className="navigation-norm">
                    <NavTab title={content.header.home} url={content.urls.homeURL} selected={false}/>
                    <NavTab title={content.header.gallery} url={content.urls.galleryURL} selected={false}/>
                    <NavTab title={content.header.projects} url={content.urls.projectsURL} selected={true}/>
                    <NavTab title={content.header.resume} url={content.urls.resumeURL} selected={false}/>
                </div>
            );
        } else if (selected === 4) {
            return(
                <div className="navigation-norm">
                    <NavTab title={content.header.home} url={content.urls.homeURL} selected={false}/>
                    <NavTab title={content.header.gallery} url={content.urls.galleryURL} selected={false}/>
                    <NavTab title={content.header.projects} url={content.urls.projectsURL} selected={false}/>
                    <NavTab title={content.header.resume} url={content.urls.resumeURL} selected={true}/>
                </div>
            );
        }
    }
}