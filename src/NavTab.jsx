import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/Header.scss';

const NavTab = (props) => {
  const { title, url, selected } = props;
  return (
    <div className={selected ? 'current-tab navigation-tab' : 'navigation-tab'}>
      <Link to={url}>
        <h4>{title}</h4>
      </Link>
    </div>
  );
};

export default NavTab;

NavTab.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};
