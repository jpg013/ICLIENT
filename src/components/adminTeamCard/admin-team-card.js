import React, { PropTypes } from 'react';
import UserIcon from '../../icons/user.icon';
import EditIcon from '../../icons/edit.icon';
import DeleteIcon from '../../icons/delete.icon'
import './admin-team-card.css';

const adminTeamCard = ({team, editHandler, removeHandler}) => {
  return (
    <div className="adminTeamCard">
      <div className="adminTeamCard-header">
        <div className="adminTeamCard-headerData">
          <div className="adminTeamCard-header_name">{team.get('name')}</div>
          <div className="adminTeamCard-header_date">created on&nbsp;{team.get('formattedCreatedDate')}</div>
        </div>
      </div>
      <div className="adminTeamCard-body">
        <div className="adminTeamCard-bodyStats">
          <div className="adminTeamCard-bodyData">
            <span className="adminTeamCard-bodyData_key">Team Count: </span>
            <span className="adminTeamCard-bodyData_val">{team.get('userCount') || 0}</span>
          </div>
          <div className="adminTeamCard-bodyData">
            <span className="adminTeamCard-bodyData_key">Report Count:</span>
            <span className="adminTeamCard-bodyData_val">{team.get('reportCount')}</span>
          </div>
          <div className="adminTeamCard-bodyData">
            <span className="adminTeamCard-bodyData_key">Set Count:</span>
            <span className="adminTeamCard-bodyData_val">{team.get('reportSetCount')}</span>
          </div>
        </div>
        <div className="adminTeamCard-actions">
          <div className="adminTeamCard-actionsItem">
            <span className="actionIcon svgIcon_medium">
              <UserIcon />
            </span>
            <span className="actionIcon svgIcon_medium" onClick={() => editHandler(team)}>
              <EditIcon />
            </span>
            <span className="actionIcon svgIcon_medium" onClick={() => removeHandler(team.get('id'))}>
              <DeleteIcon size={24}/>
            </span>
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
