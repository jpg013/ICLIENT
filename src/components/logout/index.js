import { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth.actions';

class Logout extends Component {
  componentWillMount() {
    this.props.logout();
    browserHistory.push('/');
  }

  render() {
    return null;
  }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = dispatch => {
  return {
    logout: creds => dispatch(logoutUser(creds))
  }
}

const ConnectedLogout = connect(mapStateToProps, mapDispatchToProps)(Logout);
export default ConnectedLogout;
