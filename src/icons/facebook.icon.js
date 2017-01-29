import React, { PropTypes} from 'react';
import classNames from 'classnames';
import './facebook.icon.css';

const FacebookIcon = ({cssClass}) => (
  <svg className={classNames('facebookIcon', cssClass)} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 38 38" enableBackground="new 0 0 38 38">
  <path d="M35.489,2.478C33.013,0,30.535,0,26.225,0H11.71C7.402,0,4.924,0,2.445,2.478
  	c-2.478,2.478-2.478,4.954-2.478,9.264v14.516c0,4.309,0,6.787,2.478,9.264C4.924,38,7.402,38,11.71,38h14.515
  	c4.311,0,6.788,0,9.265-2.479c2.479-2.477,2.479-4.955,2.479-9.264V11.742C37.968,7.432,37.968,4.956,35.489,2.478z M24.093,19.584
  	H20.72c0,5.386,0,12.025,0,12.025h-4.999c0,0,0-6.572,0-12.025h-2.376v-4.25h2.376v-2.748c0-1.971,0.936-5.045,5.044-5.045
  	l3.699,0.014v4.124c0,0-2.249,0-2.686,0c-0.438,0-1.059,0.22-1.059,1.155v2.5h3.807L24.093,19.584z"/>
  </svg>

)

FacebookIcon.propTypes = {
  cssClass: PropTypes.string
}

export default FacebookIcon;
