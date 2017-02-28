import React, { Component } from 'react';
import './board.common.css';

class Board extends Component {
  render() {
    return (
      <div className="boardView">
        {this.props.children}
      </div>
    )
  }
}

export default Board;
