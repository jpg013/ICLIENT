import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../../actions/admin-teams.actions';
import { openAdminDock } from '../../actions/admin-dock.actions';
import AdminTeamCard from '../../components/adminTeamCard/admin-team-card';
import BoardLoading from '../../components/boardLoading/board-loading';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AddGroupIcon from '../../icons/add-group.icon';
import { buildNewTeamModel } from '../../services/teams.service';
import './admin-teams.css';

class AdminTeams extends Component {
  componentWillMount() {
    if (this.props.status === 'not-loaded') {
      this.props.fetchTeams();
    }
  }

  render() {
    const teams = this.props.teamCollection.toArray();
    const wrapCardEnterAnimation = (teamCard, id) => (<ReactCSSTransitionGroup key={id} transitionName="adminTeamCardEnter" transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>{teamCard}</ReactCSSTransitionGroup>);
    const buildTeamCard = team => {
      return (
        <AdminTeamCard
          key={team.get('id')}
          team={team}
          editHandler={team => this.props.openAdminSlider('editTeam', team)}
          removeHandler={id => this.props.deleteTeam(id)}
        />
      )
    }
    const renderTeamCards = () => teams.map(cur => wrapCardEnterAnimation(buildTeamCard(cur), cur.get('id')));
    const getTitle = () => {
      if (this.props.status === 'loading') return '';
      return teams.length === 1 ? '1 Team' : `${teams.length} Teams`;
    }

    const handleAddTeamClick = () => {
      this.props.openAdminDock(buildNewTeamModel());
    }

    const renderAddTeamButton = () => {
      return (
        <div className="adminTeams-addTeamButton" onClick={() => handleAddTeamClick()}>
          <div className="adminTeams-addTeamButton_font">
            Add a team
          </div>
          <div className="adminTeams-addTeamButton_icon">
            <AddGroupIcon />
          </div>
        </div>
      )
    }
    const renderLoadingSpinner = () => (<BoardLoading />) ;

    return (
      <div className="boardView-container">
        {(this.props.status === 'loading') && renderLoadingSpinner()}
        <div className="boardView-containerList">
          <div className="boardView-containerListHeader">
            <span className="adminTeams-title">{getTitle()}</span>
            {!(this.props.status === 'loading') && renderAddTeamButton()}
          </div>

          <div className="adminTeams-body">
            <div className="adminTeams-body_scrollable">
              {renderTeamCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AdminTeams.propTypes = {
  teams: PropTypes.object
};

const mapStateToProps = state => {
  return {
    teamCollection: state.getIn(['adminTeams', 'collection']),
    status: state.getIn(['adminTeams', 'status'])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
    openAdminDock: model => dispatch(openAdminDock(model))
    //createTeam: data => dispatch(createTeam(data)),
    //editTeam: data => dispatch(editTeam(data)),
    //deleteTeam: id => dispatch(deleteTeam(id)),
    //openAdminSlider: (name, data) => dispatch(openAdminSlider(name, data)),
    //closeAdminSlider: () => dispatch(closeAdminSlider())
  }
}

const ConnectedAdminTeams = connect(mapStateToProps, mapDispatchToProps)(AdminTeams)
export default ConnectedAdminTeams;
