import React, { PropTypes} from 'react';
import classNames from 'classnames';
import './flag.icon.css';

const FlagIcon = ({cssClass, isActive}) => {
  const getClassNames = () => classNames('flagIcon', cssClass, {'flagIcon_active': isActive});

  return (
    <svg version="1.1" className={getClassNames()} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 38 38" enableBackground="new 0 0 38 38">
      <polygon className="flagIcon-inner" points="18.916,5.669 22.297,16.184 33.344,16.15 24.387,22.615 27.833,33.11 18.916,26.591 10,33.11 13.446,22.615 4.489,16.15 15.535,16.184 "/>
      <path className="flagIcon-outline" d="M7.6,36.414l4.374-13.32L0.604,14.889l14.02,0.042l4.292-13.345l4.291,13.345l14.021-0.042l-11.368,8.205 l4.374,13.32L18.916,28.14L7.6,36.414z M18.916,25.042l6.517,4.765l-2.519-7.67l6.546-4.725l-8.073,0.025l-2.471-7.684l-2.471,7.684 l-8.072-0.025l6.545,4.725l-2.518,7.67L18.916,25.042z"/>
    </svg>
  )
}

FlagIcon.propTypes = {
  cssClass: PropTypes.string,
  isActive: PropTypes.bool
}

export default FlagIcon;
