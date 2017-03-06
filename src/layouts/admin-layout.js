import React, { Component } from 'react';
import Board from '../common/board.common';
import Header from '../common/header.common';
import SideMenu from '../common/side-menu.common';
import { Link } from 'react-router';
import './main-layout.css';


class AdminLayout extends Component {
  render() {
    return (
      <div className="adminLayout">
        <Header />
        <SideMenu>
          <Link to="/admin" className="sideMenu-btn actionItem" activeClassName="actionItem_active">Stats</Link>
          <Link to="/admin/teams" className="sideMenu-btn actionItem" activeClassName="actionItem_active">Teams</Link>
          <Link to="/admin/users" className="sideMenu-btn actionItem" activeClassName="actionItem_active">Users</Link>
          <Link to="/admin/reports" className="sideMenu-btn actionItem" activeClassName="actionItem_active">Reports</Link>
        </SideMenu>
        <Board>
          {this.props.children}
        </Board>
      </div>
    );
  }
}
export default AdminLayout;
