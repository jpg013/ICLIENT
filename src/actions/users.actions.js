import { REQUEST_USERS, RECEIVE_USERS, REQUEST_CREATE_USER, RECEIVE_CREATE_USER, REQUEST_EDIT_USER, RECEIVE_EDIT_USER, REQUEST_DELETE_USER, RECEIVE_DELETE_USER } from './types';
import { buildUserModel } from '../services/users.service';
import { Observable } from 'rxjs/Observable';
import { callApi } from '../middleware/api';

const requestUsers = () => ({type: REQUEST_USERS});
const receiveUsers = users => ({type: RECEIVE_USERS, users});
const requestCreateUser = userModel => ({ type: REQUEST_CREATE_USER, userModel});
const receiveCreateUser = userModel => ({ type: RECEIVE_CREATE_USER, userModel});
const requestEditUser = userModel => ({ type: REQUEST_EDIT_USER, userModel});
const receiveEditUser = userModel => ({ type: RECEIVE_EDIT_USER, userModel});
const requestDeleteUser = id => ({ type: REQUEST_DELETE_USER, id });
const receiveDeleteUser = id => ({ type: RECEIVE_DELETE_USER, id });

const fetchUsers = () => {
  const config = Object.assign({}, {
    method: "GET",
    url: "users"
  });

  return dispatch => {
    dispatch(requestUsers())
    const subscribe = callApi(config).subscribe(resp => {
      subscribe.unsubscribe();
      dispatch(receiveUsers(resp.data));
    });
  }
}

const createUser = userModel => {
  const userObjectData = userModel.toJS();
  const {email, firstName, lastName, teamId, role, password} = userObjectData;
  const config = Object.assign({}, {body: {email, firstName, lastName, teamId, role, password}}, {
    method: "POST",
    url: "users"
  });

  return dispatch => {
    dispatch(requestCreateUser(userModel))
    const subscribe = callApi(config).subscribe(resp => {
      subscribe.unsubscribe();
      dispatch(receiveCreateUser(buildUserModel(resp.data)));
    });
  }
}

const editUser = userModel => {
  const userObjectData = userModel.toJS();
  const { email, firstName, lastName } = userObjectData;
  const config = Object.assign({}, {body: {email, firstName, lastName}}, {
    method: "PUT",
    url: "users"
  });

  return dispatch => {
    dispatch(requestEditUser(userModel))
    const subscribe = callApi(config).subscribe(resp => {
      subscribe.unsubscribe();
      dispatch(receiveEditUser(resp.data));
    });
  }
}

const deleteUser = id => {
  const config = Object.assign({}, {body: {id} }, {
    method: "DELETE",
    url: "users"
  });

  return dispatch => {
    dispatch(requestDeleteUser(id));
    const subscribe = callApi(config).subscribe(resp => {
      if (!resp.success) { return; }
      dispatch(receiveDeleteUser(id));
    });
  }
}


export {
  fetchUsers,
  createUser,
  editUser,
  deleteUser
}
