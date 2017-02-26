import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import InnosolLogoIcon from '../icons/innosol-logo.icon';
import GearIcon from '../icons/gear.icon'
import './header.common.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header-logoContainer">
          <InnosolLogoIcon />
        </Link>
        <div className="header-welcome">Welcome to the UCM Dashboard, {this.props.user.firstName}!</div>
        <div className="header-gear">
          <GearIcon />
        </div>
        <Link to="/logout">
          <div className="header-logout actionItem">Sign Out</div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.getIn(['auth', 'user'])
  };
}

Header.propTypes = {
  user: PropTypes.object.isRequired
}

const ConnectedHeader = connect(mapStateToProps)(Header);
export default ConnectedHeader;
