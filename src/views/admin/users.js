import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, createUser, editUser, deleteUser } from '../../actions/users.actions';
import { openSlider, closeSlider } from '../../actions/slider.actions';
import UserCard from './user-card';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GroupIcon from '../../icons/group.icon';
import ReactTransitionGroup from 'react-addons-transition-group'
import Slider from '../../sliders/slider';
import UserForm from './user-form';
import { buildDirtyUserModel } from '../../services/users.service';
import './users.css';

class Users extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    const userList = this.props.users.get('map').toArray();
    const wrapCardEnterAnimation = (userCard, id) => (<ReactCSSTransitionGroup key={id} transitionName="userCardEnter" transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>{userCard}</ReactCSSTransitionGroup>);
    const buildUserCard = user => {
      return (
        <UserCard
          key={user.get('id')}
          user={user}
          editHandler={user => this.props.openSlider('editUser', user)}
          removeHandler={id => this.props.deleteUser(id)}
        />
      )
    }

    const renderUserCards = () => userList.map(cur => wrapCardEnterAnimation(buildUserCard(cur), cur.get('id')));
    const getTitle = () => userList.length === 1 ? '1 User' : `${userList.length} Users`;
    const onSliderClose = () => this.props.closeSlider();
    const onSliderSubmit = model => model.get('state') === 'new' ? this.props.createUser(model) : this.props.editUser(model);
    const onAddUserClick = () => this.props.openSlider('addUser', buildDirtyUserModel());

    const renderSlider = () => {
      if (!this.props.slider || !this.props.slider.get('name')) return;
      let sliderChild = React.cloneElement(<UserForm />, {
        model: this.props.slider.get('model'),
        closeHandler: onSliderClose,
        submitHandler: onSliderSubmit,
      });
      return (<ReactTransitionGroup><Slider className="slider-container">{sliderChild}</Slider></ReactTransitionGroup>)
    }

    return (
      <div className="users">

        {this.props.slider && renderSlider()}

        <div className="users-list">
          <div className="users-header">
            <span className="users-title">{getTitle()}</span>
            <span className="actionIcon users-addIcon" onClick={onAddUserClick}>
              <GroupIcon height={36}/>
            </span>
          </div>

          <div className="users-body">
            <div className="users-body_scrollable">
              {renderUserCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.object
};

const mapStateToProps = state => {
  return {
    users: state.get('users'),
    slider: state.get('slider')
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    createUser: model => dispatch(createUser(model)),
    editUser: model => dispatch(editUser(model)),
    openSlider: (name, model) => dispatch(openSlider(name, model)),
    closeSlider: () => dispatch(closeSlider()),
    deleteUser: id => dispatch(deleteUser(id))
  }
}


const ConnectedUsers = connect(mapStateToProps, mapDispatchToProps)(Users)
export default ConnectedUsers;
