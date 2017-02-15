import React from 'react';
import { Link } from 'react-router';
import InnosolLogoIcon from '../icons/innosol-logo.icon';
import GearIcon from '../icons/gear.icon'
import './header.common.css';

const header = () => (
  <div className="header">
    <Link to="/" className="header-logoContainer">
      <InnosolLogoIcon />
    </Link>
    <div className="header-welcome">Welcome to the UCM Dashboard, Jenne</div>
    <div className="header-gear">
      <GearIcon />
    </div>
    <Link to="/logout">
      <div className="header-logout actionItem">Sign Out</div>
    </Link>
  </div>
)

export default header;
