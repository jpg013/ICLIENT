import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openSideDock, closeSideDock } from '../actions/side-dock.actions';
import { addTeam } from '../actions/admin-teams.actions';
import Board from '../common/board';
import Header from '../common/header';
import SideMenu from '../common/side-menu';
import SideDock from '../common/side-dock';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DashboardIcon from '../icons/dashboard.icon';
import PeopleIcon from '../icons/people.icon';
import AdminTeamForm from '../containers/adminTeams/admin-team-form';
import './admin-layout.css'

class AdminLayout extends Component {
  handleSubmitForm(formType, data) {
    if (!data) return;
    switch(formType) {
      case 'addTeam':
        return this.props.addTeam(data);
    }
  }

  getSideDockContent() {
    if (!this.props.dockModel) return null;
    switch(this.props.dockModel.get('type')) {
      case 'team':
        return (
          <AdminTeamForm
            model={this.props.dockModel}
            closeHandler={() => this.props.closeSideDock()}
            submitHandler={(formType, data) => this.handleSubmitForm(formType, data)}
          />
        );
      default:
        return null;
    }
  }

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
          <SideDock model={this.props.dockModel}>
            <ReactCSSTransitionGroup key="sideDockChildTransition" transitionName="sideDockChildTransition" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
              {this.getSideDockContent()}
            </ReactCSSTransitionGroup>
          </SideDock>
        </Board>
      </div>
    );
  }
}

const mapStateToProps = state => {
  debugger;
  return {
    dockModel: state.getIn(['sideDock', 'model'])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    closeSideDock: () => dispatch(closeSideDock()),
    addTeam: teamData => dispatch(addTeam(teamData))
  }
}

const ConnectedAdminLayout = connect(mapStateToProps, mapDispatchToProps)(AdminLayout)
export default ConnectedAdminLayout;
