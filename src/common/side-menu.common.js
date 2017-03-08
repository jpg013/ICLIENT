import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import GraphIcon from '../icons/graph.icon';
import InfluenceIcon from '../icons/influence.icon';
import EngagementIcon from '../icons/engagement.icon';
import ConnectionIcon from '../icons/connection.icon';
import CampaignIcon from '../icons/campaign.icon';
import './side-menu.common.css';

class SideMenu extends Component {
  render() {
    return (
      <div className='sideMenu'>
        <div className="sideMenu-spacer"></div>
        {this.props.children}
      </div>
    )
  }
}

SideMenu.propTypes = {
  children: PropTypes.array
}

export default SideMenu;
