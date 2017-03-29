import React, { Component } from 'react';
import Board from '../common/board';
import Header from '../common/header';
import SideMenu from '../common/side-menu';
import AdminDock from '../containers/adminDock/admin-dock';
import { Link } from 'react-router';
import DashboardIcon from '../icons/dashboard.icon';
import PeopleIcon from '../icons/people.icon';
import './admin-layout.css'

class AdminLayout extends Component {
  render() {
    return (
      <div className="adminLayout">
        <Header />
        <SideMenu>
          <Link to="/admin" className="adminSideMenu-item" activeClassName="adminSideMenu-item_active">
            <div className="adminSideMenu-itemIcon"><DashboardIcon size={18} /></div>
            <span className="adminSideMenu-item_text">Dashboard</span>
          </Link>
          <Link to="/admin/teams" className="adminSideMenu-item" activeClassName="adminSideMenu-item_active">
            <div className="adminSideMenu-itemIcon"><PeopleIcon size={18} /></div>
            <span className="adminSideMenu-item_text">Teams</span>
          </Link>
        </SideMenu>
        <Board>
          {this.props.children}
          <AdminDock></AdminDock>
        </Board>
      </div>
    );
  }
}

export default AdminLayout;
