import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import InnosolLogoIcon from '../icons/innosol-logo.icon';
import GearIcon from '../icons/gear.icon'
import './header.common.css';

class Header extends Component {
  render() {
    const renderUserGreeting = () => <span>Welcome to the {this.props.user.getIn(['team', 'name'])} Dashboard, {this.props.user.get('firstName')}!</span>
    return (
      <div className="header">
        <div className="header-logoContainer">
          <InnosolLogoIcon />
        </div>
        <div className="header-welcome">{this.props.user && renderUserGreeting()}</div>
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
  const user = state.getIn(['auth', 'user']);
  return {
    user,
    userIsAdmin: user && user.get('role') === 'sys-admin'
  };
}

Header.propTypes = {
  user: PropTypes.object
}

const ConnectedHeader = connect(mapStateToProps)(Header);
export default ConnectedHeader;
