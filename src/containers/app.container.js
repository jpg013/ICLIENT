import React, { Component, PropTypes } from 'react';
import Header from '../common/header.common';
import SideMenu from '../common/side-menu.common';
import GraphDock from './dock.container';
import './app.container.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <SideMenu />
        <GraphDock />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
