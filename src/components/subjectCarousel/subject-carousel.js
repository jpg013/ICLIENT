import React, { Component, PropTypes } from 'react';
import SubjectCarouselCard from './subject-carousel-card';
import { requestAnimation } from '../../services/animation.service';
import { fetchSubjects } from '../../actions/subject-carousel.actions';
import { connect } from 'react-redux';
import './subject-carousel.css';

/**
 * Constants
 */
const SLIDE_DURATION = 0.15;
const INITIAL_SLIDE_DURATION = 1;
const CAROUSEL_CARD_MARGIN = 15;

class SubjectCarousel extends Component {
  constructor(props) {
    super(props);

    this.keyEventHandler = e => {
      if (e.keyCode === 37) {
        // left
        this.props.slideCarousel(-1);
      } else if (e.keyCode === 39) {
        this.props.slideCarousel(1);
      }
    }
    this.slidingPosition = 0;
    this.carouselInView = false;
  }

  setupCarousel() {
    if (!this.refs.carouselSliderRef) { return };
    /* Calculate the container and card width */
    const sliderContainerWidth = this.refs.carouselSliderRef.parentElement.getBoundingClientRect().width;
    const carouselCardWidth = 154;

    this.setSlidingPosition(sliderContainerWidth);

    // call init
    this.props.initCarousel(carouselCardWidth, sliderContainerWidth);
  }

  setSlidingPosition(pos) {
    if (!this.refs.carouselSliderRef) { return; }
    this.slidingPosition = pos;
    this.refs.carouselSliderRef.style.left = `${pos}px`;
  }

  setupEventListeners() {
    window.addEventListener('keydown', this.keyEventHandler);
  }

  removeEventListeners() {
    window.removeEventListener('keydown', this.keyEventHandler);
  }

  componentDidMount() {
    if (!this.refs.carouselSliderRef) { return };
    this.setupCarousel();
    this.setupEventListeners();

    /* Fetch the subjects to load into the carousel */
    this.props.fetchSubjects();
  }

  componentWillUnmount() {
    this.removeEventListeners();
    this.props.resetCarousel();
  }

  componentDidUpdate() {
    if (this.props.carouselPosition !== undefined) {
      this.updateCarouselPosition();
    }
  }

  updateCarouselPosition() {
    if (!this.props.subjects.length) { return; }
    if (!this.carouselInView) {
      this.carouselInView = true;
      this.animateCarousel(this.props.carouselPosition, this.slidingPosition, 0.66);
    } else {
      this.animateCarousel(this.props.carouselPosition, this.slidingPosition, 0.15);
    }
  }

  animateCarousel(toPosition, fromPosition, animationDuration) {
    const animationHandler = val => this.setSlidingPosition(val);
    requestAnimation(toPosition, fromPosition, animationDuration, 'animation-subject-carousel', animationHandler);
  }

  renderSubjectCard(data) {
    return <SubjectCarouselCard
      key={data.id}
      name={data.name}
      graduatedDate={data.graduatedDate}
      isFlagged={data.isFlagged}
      score={data.score}
      />
  }

  renderCards() {
    if (!this.props.subjects || !this.props.subjects.length) { return }
    return this.props.subjects.map(cur => this.renderSubjectCard(cur));
  }

  render() {
    return (
      <div className="subjectCarousel-slider" ref="carouselSliderRef">
        {this.renderCards()}
      </div>
    )
  }
}

SubjectCarousel.propTypes = {
  carouselPosition: PropTypes.number,
  subjects: PropTypes.array
};

const mapStateToProps = state => {
  const computeCarouselPosition = (index, cardWidth, carouselWidth) => {
    const adjustment = (index === 0) ? 0 : CAROUSEL_CARD_MARGIN;
    return (carouselWidth / 2) - ((index * (cardWidth + adjustment)) + ((cardWidth + adjustment) / 2))
  }

  const cardWidth = state.getIn(['subjectCarousel', 'cardWidth']);
  const carouselWidth = state.getIn(['subjectCarousel', 'carouselWidth']);
  const index = state.getIn(['subjectCarousel', 'index']);

  return {
    carouselPosition: computeCarouselPosition(index, cardWidth, carouselWidth),
    subjects: state.getIn(['subjectCarousel', 'subjects']).toJS()
  };
}

const mapDispatchToProps = dispatch => {
  return {
    initCarousel: (cardWidth, carouselWidth) => dispatch({type: 'SETUP_CAROUSEL', payload: {cardWidth, carouselWidth}}),
    slideCarousel: (payload) => dispatch({type: 'SLIDE_CAROUSEL', payload: payload}),
    resetCarousel: () => dispatch({type: 'RESET_CAROUSEL'}),
    fetchSubjects: () => dispatch(fetchSubjects())
  }
}

const ConnectedSubjectCarousel = connect(mapStateToProps, mapDispatchToProps)(SubjectCarousel);
export default ConnectedSubjectCarousel;
