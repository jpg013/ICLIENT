import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ComingSoon from '../components/comingSoon/coming-soon';
import './admin-dashboard.css';

class AdminDashboard extends Component {
  render() {
    return (
      <div className="adminDashboard">
        <ComingSoon>

        </ComingSoon>
      </div>
    );
  }
}

AdminDashboard.propTypes = {
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

const ConnectedAdminDashboard = connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
export default ConnectedAdminDashboard;
