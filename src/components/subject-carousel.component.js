import React, { Component } from 'react';

import './subject-carousel.component.css';

class DockCarousel extends Component {
  render() {
    return (
      <div className="subjectCarousel-container">
        <div className="subjectCarouselCard-stage"></div>

        <div className="subjectCarouselSlider">
          <div className="subjectCarouselCard">
            <div className="subjectCarouselCard-score">
              <div className="subjectCarouselCard-score_inner">100</div>
            </div>
            <div className="subjectCarouselCard-profile"></div>
          </div>
          <div className="subjectCarouselCard">
            <div className="subjectCarouselCard-score">
              <div className="subjectCarouselCard-score_inner">100</div>
            </div>
            <div className="subjectCarouselCard-profile"></div>
          </div>
          <div className="subjectCarouselCard">
            <div className="subjectCarouselCard-score">
              <div className="subjectCarouselCard-score_inner">100</div>
            </div>
            <div className="subjectCarouselCard-profile"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default DockCarousel;
