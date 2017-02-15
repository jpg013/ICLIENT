import React, { Component } from 'react';
import './empty-layout.css';

class EmptyLayout extends Component {
  render() {
    return (
      <div className="emptyLayout">
        {this.props.children}
      </div>
    );
  }
}
export default EmptyLayout;
