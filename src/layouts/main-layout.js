import React, { Component, PropTypes } from 'react';
import Header from '../common/header.common';
import SideMenu from '../common/side-menu.common';
import './main-layout.css';

class MainLayout extends Component {
  render() {
    return (
      <div className="mainLayout">
        <Header />
        <SideMenu />
        {this.props.children}
      </div>
    );
  }
}
export default MainLayout;
