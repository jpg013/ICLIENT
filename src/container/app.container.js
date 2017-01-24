import React, { Component } from 'react';
import Header from '../common/header.common';
import SideMenu from '../common/side-menu.common';
import GraphDock from './graph-dock.container';
import './app.container.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <SideMenu></SideMenu>
        <GraphDock></GraphDock>
      </div>
    );
  }
}

export default App;
