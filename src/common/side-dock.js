import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import './side-dock.css';

const sideDock = ({model, children}) => {
  const getDockClassNames = () => {
    return classNames(
      'sideDock',
      {'sideDock_open': !!model}
    );
  }
  return (<div className={getDockClassNames()}>{children}</div>);
}

sideDock.propTypes = {
  children: PropTypes.object,
  model: PropTypes.object
}

export default sideDock;
