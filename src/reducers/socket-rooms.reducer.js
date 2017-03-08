import InitialState from './initial-state';
import { Map, List } from 'immutable';
import { SOCKET_ROOM_NOTIFICATION } from '../actions/types';

const defaultState = InitialState.get('socketRooms');

const getRoomUpdate = (room, update) => {
  if (room === 'admin') {
    return Map({connectedClients: List(update.connectedClients)});
  }
  return Map();
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case SOCKET_ROOM_NOTIFICATION:
      return state.set(action.room, getRoomUpdate(action.room, action.update));
    default:
      return state;
  }
}
