import React from 'react';
import { NavTab } from './NavTab.jsx';
import './css/Header.scss';

export class Header extends React.Component {
    render() {
        const { selected } = this.props;
        if (selected === 1) {
            return(
                <div className="navigation-norm">
                    <NavTab title='HOME' url='/' selected={true}/>
                    <NavTab title='RESUME' url='/resume' selected={false}/>
                    <NavTab title='GALLERY' url='/gallery' selected={false}/>
                    <NavTab title='PROJECTS' url='/projects' selected={false}/>
                </div>
            );
        } else if (selected === 2) {
            return(
                <div className="navigation-norm">
                    <NavTab title='HOME' url='/' selected={false}/>
                    <NavTab title='RESUME' url='/resume' selected={true}/>
                    <NavTab title='GALLERY' url='/gallery' selected={false}/>
                    <NavTab title='PROJECTS' url='/projects' selected={false}/>
                </div>
            );
        } else if (selected === 3) {
            return(
                <div className="navigation-norm">
                    <NavTab title='HOME' url='/' selected={false}/>
                    <NavTab title='RESUME' url='/resume' selected={false}/>
                    <NavTab title='GALLERY' url='/gallery' selected={true}/>
                    <NavTab title='PROJECTS' url='/projects' selected={false}/>
                </div>
            );
        } else if (selected === 4) {
            return(
                <div className="navigation-norm">
                    <NavTab title='HOME' url='/' selected={false}/>
                    <NavTab title='RESUME' url='/resume' selected={false}/>
                    <NavTab title='GALLERY' url='/gallery' selected={false}/>
                    <NavTab title='PROJECTS' url='/projects' selected={true}/>
                </div>
            );
        }
    }
}