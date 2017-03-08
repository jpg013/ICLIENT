import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../../actions/admin.actions';
import TeamCard from './team-card';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GroupIcon from '../../icons/group.icon';
import './teams.css';

class AdminTeams extends Component {
  componentWillMount() {
    this.props.fetchTeams();
  }

  render() {
    const teamList = this.props.teams.get('list').toArray();
    const wrapCardEnterAnimation = (teamCard, id) => (<ReactCSSTransitionGroup key={id} transitionName="teamCardEnter" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>{teamCard}</ReactCSSTransitionGroup>);
    const buildTeamCard = team => <TeamCard key={team.get('id')} team={team} editClickHandler={team => alert('edit click handler')} />
    const renderTeamCards = () => teamList.map(cur => wrapCardEnterAnimation(buildTeamCard(cur), cur.get('id')));

    const getTitle = () => {
      return teamList.length === 1 ? '1 Team' : `${teamList.length} Teams`;
    }

    return (
      <div className="adminTeams">
        <div className="adminTeams-list">
          <div className="adminTeams-header">
            <span className="adminTeams-title">{getTitle()}</span>
            <span className="actionIcon adminTeams-addIcon">
              <GroupIcon height={36}/>
            </span>
          </div>

          <div className="adminTeams-body">
            {renderTeamCards()}
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
    teams: state.getIn(['admin', 'teams'])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: () => dispatch(fetchTeams())
  }
}


const ConnectedAdminTeams = connect(mapStateToProps, mapDispatchToProps)(AdminTeams)
export default ConnectedAdminTeams;
