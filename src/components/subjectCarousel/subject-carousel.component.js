import React, { Component } from 'react';
import SubjectCarouselCard from './subject-carousel-card.component';
import './subject-carousel.component.css';

class DockCarousel extends Component {
  render() {
    return (
      <div className="subjectCarousel-container">
        <div className="subjectCarouselCard-stage"></div>

        <div className="subjectCarouselSlider">
          <SubjectCarouselCard />
        </div>
      </div>
    )
  }
}

export default DockCarousel;
