import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import InfluenceIcon from '../icons/influence.icon';
import EngagementIcon from '../icons/engagement.icon';
import ConnectionIcon from '../icons/connection.icon';
import CampaignIcon from '../icons/campaign.icon';
import classNames from 'classnames';
import './side-menu.common.css';

const SideMenu = ({route}) => {
  const getLinkClassNames = name => {
    return classNames(
      'sideMenu-btn',
      'actionItem',
      {'actionItem_active' : route && route.get('name') === name}
    );
  }

  return (
  <div className="sideMenu">
    <Link to="/influencers" className={getLinkClassNames('influencers')}>
      <InfluenceIcon />
    </Link>
    <Link className="sideMenu-btn actionItem">
      <EngagementIcon />
    </Link>
    <Link className="sideMenu-btn actionItem">
      <ConnectionIcon />
    </Link>
    <Link className="sideMenu-btn actionItem">
      <CampaignIcon />
    </Link>
  </div>
  )
}

SideMenu.propTypes = {
  route: PropTypes.object
}

export default SideMenu;
