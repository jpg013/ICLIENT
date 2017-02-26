import React, { Component, PropTypes } from 'react';
import './board.common.css';

class Board extends Component {
  render() {
    return (
      <div className="board">
        {this.props.children}
      </div>
    )
  }
}

export default Board;
