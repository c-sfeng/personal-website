import * as React from 'react';
import { NavTab } from './NavTab.jsx';
import './css/Header.scss';

export class Header extends React.Component {
    render() {
        return(
            <div className="sub-container navigation-norm">
                <NavTab className="current-tab" title='HOME' url='#'/>
                <NavTab title='RESUME' url='#'/>
                <NavTab title='GALLERY' url='#'/>
                <NavTab title='PROJECTS' url='#'/>
            </div>
        );
    }
}