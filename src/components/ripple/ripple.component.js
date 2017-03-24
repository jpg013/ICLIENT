import React, { PropTypes, Component } from 'react';
import './ripple.component.css';

class Ripple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rippleElement: undefined
    };

    this.onMouseDown = this.mousedownHandler.bind(this);
  }

  mousedownHandler(e) {
    if (this.props.disabled) return;
    if (!this.state.rippleElement) return;
    if (!this.isRippleElementClick(e.target)) return;
    this.addRippleAffect(e.target);
  }

  isRippleElementClick(el) {
    const parentEl = this.state.rippleElement.parentElement;
    if (!parentEl) return false;
    return (parentEl.contains(el) || parentEl.isSameNode(el));
  }

  componentDidMount() {
    this.attachEventListeners();
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  attachEventListeners() {
    document.addEventListener('mousedown', this.onMouseDown);
  }

  removeEventListeners() {
    document.removeEventListener('mousedown', this.onMouseDown);
  }

  setRippleElement(el) {
    if (!el || this.state.rippleElement) return;
    this.setState({
      rippleElement: el
    })
  }

  addRippleAffect(target) {
    if (!this.state.rippleElement) return;
    if (this.state.rippleElement.classList.contains('ripple_animate')) {
      this.state.rippleElement.classList.remove('ripple_animate');
    }

    setTimeout(() => this.state.rippleElement.classList.add('ripple_animate'), 1)
  }

  render() {
    return (<div className="ripple" ref={el => this.setRippleElement(el)}></div>);
  }
};

Ripple.propTypes = {
  disabled: PropTypes.bool
};

export default Ripple;
