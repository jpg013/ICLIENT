import React, { Component } from 'react';
import SubjectCarouselCard from './subject-carousel-card.component';
import './subject-carousel.component.css';

class DockCarousel extends Component {
  constructor(props) {
    super(props);
  }

  onSliderRenderedRef(carouselSlider) {
    if (!carouselSlider) { return; }
    this.carouselSlideAmount = carouselSlider.children[1].getBoundingClientRect().width;
    this.carouselSlider = carouselSlider;
    this.index = 0;
    this.slideIndexCardIntoDock();
  }

  slideIndexCardIntoDock() {
    if (!this.carouselSlider) { return; }
    const adjustedSlideVal = (this.index  * this.carouselSlideAmount) + (this.carouselSlideAmount / 2);
    this.carouselSlider.style.left = `calc(50% - ${adjustedSlideVal}px)`
  }

  render() {
    return (
      <div className="subjectCarousel-container">
        <div className="subjectCarouselCard-stage"></div>
        <div className="subjectCarouselSlider" ref={input => this.onSliderRenderedRef(input)}>
          <SubjectCarouselCard />
          <SubjectCarouselCard />
        </div>
      </div>
    )
  }
}

export default DockCarousel;
