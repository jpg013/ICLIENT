import React, { Component } from 'react';
import TwitterIcon from '../../icons/twitter.icon';
import FacebookIcon from '../../icons/facebook.icon';
import LinkedinIcon from '../../icons/linkedin.icon';
import GooglePlusIcon from '../../icons/google-plus.icon';
import FlagIcon from '../../icons/flag.icon';
import './subject-carousel-card.component.css';

class SubjectCarouselCard extends Component {
  render() {
    return (
      <div className="subjectCarouselCard">
        <div className="subjectCarouselCard-score">
          <div className="subjectCarouselCard-score_inner">100</div>
        </div>
        <div className="subjectCarouselCard-flag">
          <FlagIcon cssClass="subjectCarouselCard-flag_icon"/>
        </div>

        <div className="subjectCarouselCard-profile"></div>
        <div className="subjectCarouselCard-metaInfo">
          <div className="subjectCarouselCard-metaInfo_primary">John Jones</div>
          <div className="subjectCarouselCard-metaInfo_secondary">1995</div>
        </div>
        <div className="subjectCarouselCard-social">
          <TwitterIcon cssClass="subjectCarouselCard-social_icon" />
          <FacebookIcon cssClass="subjectCarouselCard-social_icon" />
          <LinkedinIcon cssClass="subjectCarouselCard-social_icon" />
          <GooglePlusIcon cssClass="subjectCarouselCard-social_icon" />
        </div>
      </div>
    )
  }
}

export default SubjectCarouselCard;
