import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import GraphIcon from '../icons/graph.icon';
import InfluenceIcon from '../icons/influence.icon';
import EngagementIcon from '../icons/engagement.icon';
import ConnectionIcon from '../icons/connection.icon';
import CampaignIcon from '../icons/campaign.icon';
import './side-menu.common.css';

const SideMenu = ({route}) => {
  return (
  <div className="sideMenu">
    <Link to="/" className="sideMenu-btn actionItem actionItem_active">
      <GraphIcon />
    </Link>
    <Link to="/influencers" className="sideMenu-btn actionItem actionItem_inactive">
      <InfluenceIcon />
    </Link>
    <Link className="sideMenu-btn actionItem actionItem_inactive">
      <EngagementIcon />
    </Link>
    <Link className="sideMenu-btn actionItem actionItem_inactive">
      <ConnectionIcon />
    </Link>
    <Link className="sideMenu-btn actionItem actionItem_inactive">
      <CampaignIcon />
    </Link>
  </div>
  )
}

SideMenu.propTypes = {
  route: PropTypes.object
}

export default SideMenu;
