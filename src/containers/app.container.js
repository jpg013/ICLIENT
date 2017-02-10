import React, { Component, PropTypes } from 'react';
import Header from '../common/header.common';
import SideMenu from '../common/side-menu.common';
import GraphDock from './dock.container';
import { connect } from 'react-redux';
import './app.container.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <SideMenu route={this.props.route} />
        <GraphDock dispatch={this.props.dispatch} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  route: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    route: state.get('route')
  };
}

const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
