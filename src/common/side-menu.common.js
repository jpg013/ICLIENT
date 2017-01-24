import React, { Component } from 'react';
import { Link } from 'react-router';
import InfluenceIcon from '../icons/influence.icon';
import EngagementIcon from '../icons/engagement.icon';
import ConnectionIcon from '../icons/connection.icon';
import CampaignIcon from '../icons/campaign.icon';
import './side-menu.common.css';

const sideNav = () => (
  <div className="sideMenu">
    <Link to="/influencers" className="sideMenu-btn activeItem">
      <InfluenceIcon />
    </Link>
    <Link to="/influencers" className="sideMenu-btn activeItem">
      <EngagementIcon />
    </Link>
    <Link to="/influencers" className="sideMenu-btn activeItem">
      <ConnectionIcon />
    </Link>
    <Link to="/influencers" className="sideMenu-btn activeItem">
      <CampaignIcon />
    </Link>
  </div>
)

export default sideNav;
