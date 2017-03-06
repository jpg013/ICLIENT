import React, { Component } from 'react';
import Header from '../common/header.common';
import SideMenu from '../common/side-menu.common';
import Board from '../common/board.common';
import { Link } from 'react-router';
import GraphIcon from '../icons/graph.icon';
import InfluenceIcon from '../icons/influence.icon';
import EngagementIcon from '../icons/engagement.icon';
import ConnectionIcon from '../icons/connection.icon';
import CampaignIcon from '../icons/campaign.icon';
import './main-layout.css';

class MainLayout extends Component {
  render() {
    return (
      <div className="mainLayout">
        <Header />
        <SideMenu>
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
        </SideMenu>
        <Board size="full">
          {this.props.children}
        </Board>
      </div>
    );
  }
}
export default MainLayout;
