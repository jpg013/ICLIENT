import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './board.css';

class Board extends Component {
  render() {
    const renderBoardClassName = () => {
      return classNames('boardView');
    }
    return (
      <div className={renderBoardClassName()}>
        {this.props.children}
      </div>
    )
  }
}

Board.propTypes = {
  size: PropTypes.string
}

export default Board;
