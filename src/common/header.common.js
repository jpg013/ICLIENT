import React, { Component } from 'react';
import { Link } from 'react-router';
import './header.common.css';

const header = () => (
  <div className="header">
    <div className="header-logoContainer">Logo Here</div>
    <div className="header-welcome">Welcome to the UCM Dashboard, Jenne</div>
    <Link to="/logout">
      <div className="header-logout activeItem">Sign Out</div>
    </Link>
  </div>
)

export default header;
