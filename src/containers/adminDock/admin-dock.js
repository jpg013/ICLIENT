import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { addTeam } from '../../actions/admin-teams.actions';
import { closeAdminDock } from '../../actions/admin-dock.actions';
import AdminTeamForm from '../adminTeams/admin-team-form';
import classNames from 'classnames';
import './admin-dock.css';

class AdminDock extends Component {
  handleSubmitForm(model) {
    if (!model) return;
    switch(model.get('type')) {
      case 'team':
        return !model.get('id') ? this.props.addTeam(model) : undefined
      default:
        return;
    }
  }

  renderAdminDockContent() {
    if (!this.props.dockState.get('isOpen')) return;

    switch(this.props.dockState.getIn(['model', 'type'])) {
      case 'team':
        return (
          <AdminTeamForm
            model={this.props.dockState.get('model')}
            error={this.props.dockState.get('error')}
            closeHandler={() => this.props.closeAdminDock()}
            submitHandler={(formType, data) => this.handleSubmitForm(formType, data)}
          />
        );
      default:
        return null;
    }
  }

  render() {
    const getDockClassNames = () => {
      return classNames('adminDock', {'adminDock_open': this.props.dockState.get('isOpen')} );
    }
    return (
      <div className={getDockClassNames()}>
        <ReactCSSTransitionGroup key="adminDockChildTransition" transitionName="adminDockChildTransition" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
          {this.renderAdminDockContent()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dockState: state.get('adminDock')
  };
}

const mapDispatchToProps = dispatch => {
  return {
    closeAdminDock: () => dispatch(closeAdminDock()),
    addTeam: teamModel => dispatch(addTeam(teamModel))
  }
}

const ConnectedAdminDock = connect(mapStateToProps, mapDispatchToProps)(AdminDock);
export default ConnectedAdminDock;
