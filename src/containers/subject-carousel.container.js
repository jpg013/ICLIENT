import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SubjectCarousel from '../views/subjectCarousel/subject-carousel.js';
import './subject-carousel.container.css';
import classNames from 'classnames';

/**
 * Constants
 */

class SubjectCarouselContainer extends Component {
  getCarouselStateClassNames() {
    return classNames('subjectCarousel-containerStage', {'subjectCarousel-containerStage_active': this.props.active});
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  /*
   * Render Methods
   */
  renderSubjectCarousel() {
    return this.props.active ? <SubjectCarousel /> : undefined;
  }

  render() {
    return (
      <div className="subjectCarousel-container">
        <div className={this.getCarouselStateClassNames()}></div>
        {this.renderSubjectCarousel()}
      </div>
    )
  }
}

SubjectCarouselContainer.propTypes = {
  subjectCarousel: PropTypes.object
};

const mapStateToProps = state => {
  return {
    subjectCarousel: state.getIn('subjectCarousel')
  };
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const ConnectedSubjectCarouselContainer = connect(mapStateToProps, mapDispatchToProps)(SubjectCarouselContainer);
export default ConnectedSubjectCarouselContainer;
