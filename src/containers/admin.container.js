import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './admin.container.css';

class Admin extends Component {
  render() {
    return (
      <div className="admin">
      <h2> Hello world</h2>
      </div>
    );
  }
}

Admin.propTypes = {
  children: PropTypes.object.isRequired
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

const ConnectedAdmin = connect(mapStateToProps, mapDispatchToProps)(Admin);
export default ConnectedAdmin;
