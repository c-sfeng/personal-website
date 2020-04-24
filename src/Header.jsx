import * as React from 'react';
import { NavTab } from './NavTab.jsx';
import './css/Header.scss';

export class Header extends React.Component {
    render() {
        return(
            <div className="navigation-norm">
                <NavTab title='HOME' url='#' selected={true}/>
                <NavTab title='RESUME' url='#' selected={false}/>
                <NavTab title='GALLERY' url='#' selected={false}/>
                <NavTab title='PROJECTS' url='#' selected={false}/>
            </div>
        );
    }
}