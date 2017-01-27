import React, { Component } from 'react';
import { Link } from 'react-router';
import HeaderLogoIcon from '../icons/header-logo.icon';
import GearIcon from '../icons/gear.icon'
import './header.common.css';

const header = () => (
  <div className="header">
    <Link to="/" className="header-logoContainer">
      <HeaderLogoIcon />
    </Link>
    <div className="header-welcome">Welcome to the UCM Dashboard, Jenne</div>
    <div className="header-gear">
      <GearIcon />
    </div>
    <Link to="/logout">
      <div className="header-logout activeItem">Sign Out</div>
    </Link>
  </div>
)

export default header;
