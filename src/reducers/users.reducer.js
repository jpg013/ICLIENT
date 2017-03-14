import InitialState from './initial-state';
import { Map, List, OrderedMap } from 'immutable';
import { RECEIVE_USERS, RECEIVE_CREATE_USER, RECEIVE_DELETE_USER } from '../actions/types';
import { buildUserMap } from '../services/users.service';

const defaultState = InitialState.get('users');

export default function (state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return state.set('map', buildUserMap(action.users));
    case RECEIVE_CREATE_USER:
      return state.update('map', val => val.set(action.userModel.get('id'), action.userModel))
    case RECEIVE_DELETE_USER:
      return state.update('map', val => val.delete(action.id));
    default:
      return state;
  }
}
