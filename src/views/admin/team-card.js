import React, { PropTypes } from 'react';
import classNames from 'classnames';
import UserIcon from '../../icons/user.icon';
import EditIcon from '../../icons/edit.icon';
import './team-card.css';
import moment from 'moment';

const teamCard = ({team, editClickHandler}) => {
  const onEditClick = () => editClickHandler(team);
  const formatCreatedDate = createdDate => moment(createdDate).format('MMMM Do, YYYY');

  console.log(team.toJS());
  return (
    <div className="teamCard">
      <div className="teamCard-header">
        <div className="teamCard-headerData">
          <div className="teamCard-header_name">{team.get('name')}</div>
          <div className="teamCard-header_date">created on&nbsp;{formatCreatedDate(team.get('createdDate'))}</div>
        </div>
      </div>
      <div className="teamCard-body">
        <div className="teamCard-bodyStats">
          <div className="teamCard-bodyData">
            <span className="teamCard-bodyData_key">Team Count: </span>
            <span className="teamCard-bodyData_val">{team.get('userCount') || 0}</span>
          </div>
          <div className="teamCard-bodyData">
            <span className="teamCard-bodyData_key">Report Count:</span>
            <span className="teamCard-bodyData_val">{team.get('reportCount')}</span>
          </div>
          <div className="teamCard-bodyData">
            <span className="teamCard-bodyData_key">Set Count:</span>
            <span className="teamCard-bodyData_val">{team.get('reportSetCount')}</span>
          </div>
        </div>
        <div className="teamCard-actions">
          <div className="teamCard-actionsItem">
            <span className="actionIcon svgIcon_medium">
              <UserIcon />
            </span>
            <span className="actionIcon svgIcon_medium">
              <EditIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

teamCard.propTypes = {
  team: PropTypes.object.isRequired,
  editClickHandler: PropTypes.func.isRequired
}

export default teamCard;
