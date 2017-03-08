import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './admin-home.css';

class AdminHome extends Component {
  render() {
    return (
      <div className="adminHome">
        <h2>Hello world</h2>
      </div>
    );
  }
}

AdminHome.propTypes = {
  children: PropTypes.array
};

const mapStateToProps = state => {
  return {
    user: state.getIn(['auth', 'user'])
  };
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const ConnectedAdminHome = connect(mapStateToProps, mapDispatchToProps)(AdminHome);
export default ConnectedAdminHome;
