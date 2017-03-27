import React, { PropTypes } from 'react';
import PeopleIcon from '../../icons/people.icon';
import FolderIcon from '../../icons/folder.icon';
import UpdateIcon from '../../icons/update.icon';
import UserIcon from '../../icons/user.icon';
import EditIcon from '../../icons/edit.icon';
import DeleteIcon from '../../icons/delete.icon'
import './admin-team-card.css';

const adminTeamCard = ({team, editHandler, removeHandler}) => {
  const renderTeamImage = () => {
    return (
      <img className="adminTeamCard-logo_img" src="/images/ucm.png" />
    )
  }

  return (
    <div className="adminTeamCard">
      <div className="adminTeamCard-header">
        <div className="adminTeamCard-headerTitle">
          <div className="adminTeamCard-headerTitle_name">{team.get('name')}</div>
          <div className="adminTeamCard-headerTitle_date">created on&nbsp;{team.get('formattedCreatedDate')}</div>
        </div>
        <div className="adminTeamCard-logo">
          {renderTeamImage()}
        </div>
      </div>
      <div className="adminTeamCard-stats">
        <div className="adminTeamCard-bodyStats">
          <div className="adminTeamCard-StatRow">
            <div className="adminTeamCard-StatItem">
              <div className="adminTeamCard-StatItemTop">
                <div className="adminTeamCard-StatItemTop_icon">
                  <PeopleIcon />
                </div>
                <div className="adminTeamCard-StatItemTop_data">
                  {team.get('userCount') || 0}
                </div>
              </div>
              <div className="adminTeamCard-StatItemLabel">
                Total Users
              </div>
            </div>

            <span className="adminTeamCard-StatItemSeparator"></span>
            <div className="adminTeamCard-StatItem">
              <div className="adminTeamCard-StatItemTop">
                <div className="adminTeamCard-StatItemTop_icon">
                  <FolderIcon />
                </div>
                <div className="adminTeamCard-StatItemTop_data">
                  {team.get('reportCount') || 0}
                </div>
              </div>
              <div className="adminTeamCard-StatItemLabel">
                Total Reports
              </div>
            </div>
            <span className="adminTeamCard-StatItemSeparator"></span>
            <div className="adminTeamCard-StatItem">
              <div className="adminTeamCard-StatItemTop">
                <div className="adminTeamCard-StatItemTop_icon">
                  <UpdateIcon />
                </div>
                <div className="adminTeamCard-StatItemTop_data">
                  {team.get('formattedLastActivityDate')}
                </div>
              </div>
              <div className="adminTeamCard-StatItemLabel">
                Last Activity
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

adminTeamCard.propTypes = {
  team: PropTypes.object.isRequired,
  editHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired
}

export default adminTeamCard;
