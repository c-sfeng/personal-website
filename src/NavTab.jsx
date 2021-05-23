import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.scss';

const NavTab = (props) => {
    const { title, url, selected } = props;
    return (               
        <div className={selected ? "current-tab navigation-tab" : "navigation-tab"}>
            <Link to={url}> 
                <h4>{title}</h4>
            </Link>
        </div>
    );
}

export default NavTab;