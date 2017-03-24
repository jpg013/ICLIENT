import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTeams, createTeam, openAdminSlider, closeAdminSlider, deleteTeam, editTeam } from '../../actions/admin.actions';
import TeamCard from './team-card';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GroupIcon from '../../icons/group.icon';
import AddTeamForm from '../../sliders/add-team-form';
import ReactTransitionGroup from 'react-addons-transition-group'
import Slider from '../../sliders/slider';
import './teams.css';

class AdminTeams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: undefined
    };
  }

  componentWillMount() {
    this.props.fetchTeams();
  }

  render() {
    const teamList = this.props.teams.get('list').toArray();
    const wrapCardEnterAnimation = (teamCard, id) => (<ReactCSSTransitionGroup key={id} transitionName="teamCardEnter" transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>{teamCard}</ReactCSSTransitionGroup>);
    const buildTeamCard = team => {
      return (
        <TeamCard
          key={team.get('id')}
          team={team}
          editHandler={team => this.props.openAdminSlider('editTeam', team)}
          removeHandler={id => this.props.deleteTeam(id)}
        />
      )
    }
    const renderTeamCards = () => teamList.map(cur => wrapCardEnterAnimation(buildTeamCard(cur), cur.get('id')));
    const getTitle = () => teamList.length === 1 ? '1 Team' : `${teamList.length} Teams`;
    const onSliderClose = () => this.props.closeAdminSlider(undefined);
    const onSliderSubmit = data => {
      return data.id ? this.props.editTeam(data) : this.props.createTeam(data);
    }
    const onAddTeamClick = () => this.props.openAdminSlider('addTeam');

    const renderSlider = () => {
      let sliderChild;
      if (this.props.slider.get('name') === 'addTeam') {
        sliderChild = React.cloneElement(<AddTeamForm />, {
          status: this.props.slider.get('status'),
          closeHandler: onSliderClose,
          submitHandler: onSliderSubmit,
        });
      } else if (this.props.slider.get('name') === 'editTeam') {
        sliderChild = React.cloneElement(<AddTeamForm />, {
          status: this.props.slider.get('status'),
          closeHandler: onSliderClose,
          submitHandler: onSliderSubmit,
          data: this.props.slider.get('data')
        });
      }

      return sliderChild ? (
        <ReactTransitionGroup>
          <Slider>{sliderChild}</Slider>
        </ReactTransitionGroup>
      ) : null;
    }

    return (
      <div className="adminTeams">

        {this.props.slider && renderSlider()}

        <div className="adminTeams-list">
          <div className="adminTeams-header">
            <span className="adminTeams-title">{getTitle()}</span>
            <span className="actionIcon adminTeams-addIcon" onClick={onAddTeamClick}>
              <GroupIcon height={36}/>
            </span>
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
    teams: state.getIn(['admin', 'teams']),
    slider: state.getIn(['admin', 'slider'])
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
    createTeam: data => dispatch(createTeam(data)),
    editTeam: data => dispatch(editTeam(data)),
    deleteTeam: id => dispatch(deleteTeam(id)),
    openAdminSlider: (name, data) => dispatch(openAdminSlider(name, data)),
    closeAdminSlider: () => dispatch(closeAdminSlider())
  }
}


const ConnectedAdminTeams = connect(mapStateToProps, mapDispatchToProps)(AdminTeams)
export default ConnectedAdminTeams;
