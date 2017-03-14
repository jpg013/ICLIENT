import React, { PropTypes } from 'react';
import classNames from 'classnames';
import EditIcon from '../../icons/edit.icon';
import DeleteIcon from '../../icons/delete.icon'
import './user-card.css';
import moment from 'moment';

const userCard = ({user, editHandler, removeHandler}) => {
  const formatCreatedDate = createdDate => moment(createdDate).format('MMMM Do, YYYY');
  const getName = () => `${user.get('firstName')} ${user.get('lastName')}`;

  return (
    <div className="userCard">
      <div className="userCard-header">
        <div className="userCard-headerData">
          <div className="userCard-header_name">{getName()}</div>
          <div className="userCard-header_date">created on&nbsp;{formatCreatedDate(user.get('createdDate'))}</div>
        </div>
      </div>
      <div className="userCard-body">
        <div className="userCard-bodyStats">
          <div className="userCard-bodyData">
            <span className="userCard-bodyData_key">Team Count: </span>
            <span className="userCard-bodyData_val">{user.get('userCount') || 0}</span>
          </div>
          <div className="userCard-bodyData">
            <span className="userCard-bodyData_key">Report Count:</span>
            <span className="userCard-bodyData_val">{user.get('reportCount')}</span>
          </div>
          <div className="userCard-bodyData">
            <span className="userCard-bodyData_key">Set Count:</span>
            <span className="userCard-bodyData_val">{user.get('reportSetCount')}</span>
          </div>
        </div>
        <div className="userCard-actions">
          <div className="userCard-actionsItem">
            <span className="actionIcon svgIcon_medium" onClick={() => editHandler(user)}>
              <EditIcon />
            </span>
            <span className="actionIcon svgIcon_medium" onClick={() => removeHandler(user.get('id'))}>
              <DeleteIcon size={24}/>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

userCard.propTypes = {
  user: PropTypes.object.isRequired,
  editHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired
}

export default userCard;
