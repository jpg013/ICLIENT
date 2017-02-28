import React, { Component } from 'react';
import Header from '../common/header.common';
import SideMenu from '../common/side-menu.common';
import Board from '../common/board.common';
import './main-layout.css';

class MainLayout extends Component {
  render() {
    return (
      <div className="mainLayout">
        <Header />
        <SideMenu />
        <Board>
          {this.props.children}
        </Board>
      </div>
    );
  }
}
export default MainLayout;
