import React, { Component } from 'react';
import { Link } from 'react-router';
import InfluenceIcon from '../icons/influence.icon';
import EngagementIcon from '../icons/engagement.icon';
import ConnectionIcon from '../icons/connection.icon';
import CampaignIcon from '../icons/campaign.icon';
import './side-menu.common.css';

const sideNav = () => (
  <div className="sideMenu">
    <div className="sideMenu-btn activeItem">
      <InfluenceIcon />
    </div>
    <div className="sideMenu-btn activeItem">
      <EngagementIcon />
    </div>
    <div className="sideMenu-btn activeItem">
      <ConnectionIcon />
    </div>
    <div className="sideMenu-btn activeItem">
      <CampaignIcon />
    </div>
  </div>
)

export default sideNav;
