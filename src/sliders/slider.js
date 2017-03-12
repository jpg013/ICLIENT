import React, { PropTypes, Component } from 'react';
import './slider.css';

class Slider extends Component {
  render() {
    return (<div className="slider">{this.props.children}</div>)
  }
}

Slider.propTypes = {
  children: PropTypes.object
}

export default Slider;
