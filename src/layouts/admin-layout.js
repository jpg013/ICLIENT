import React, { Component } from 'react';
import Board from '../common/board';
import Header from '../common/header';
import SideMenu from '../common/side-menu';
import { Link } from 'react-router';
import './admin-layout.css';


class AdminLayout extends Component {
  render() {
    return (
      <div className="adminLayout">
        <Header />
        <SideMenu>
          <Link to="/admin" className="adminSideMenu-item" activeClassName="adminSideMenu-item_active">Dashboard</Link>
          <Link to="/admin/teams" className="adminSideMenu-item" activeClassName="adminSideMenu-item_active">Teams</Link>
          <Link to="/admin/users" className="adminSideMenu-item" activeClassName="adminSideMenu-item_active">Users</Link>
          <Link to="/admin/reports" className="adminSideMenu-item" activeClassName="adminSideMenu-item_active">Reports</Link>
        </SideMenu>
        <Board>
          {this.props.children}
        </Board>
      </div>
    );
  }
}
export default AdminLayout;
