import InitialState from './initial-state';
import { Map, OrderedMap } from 'immutable';
import { REQUEST_TEAMS, RECEIVE_TEAMS, SOCKET_ROOM_NOTIFICATION } from '../actions/types';
import { buildTeamModel, buildTeamCollectionMap } from '../services/teams.service';
import moment from 'moment';

const defaultState = InitialState.get('adminTeams');

const sortTeamCollection = teamCollection => teamCollection.sort((a, b) => b.get('createdDate').getTime() < a.get('createdDate').getTime());

const addTeamToCollection = (teamModel, collection) => {
  collection = collection.set(teamModel.get('id'), teamModel);
  return sortTeamCollection(collection);
}

const handleSocketRoomNotification = (payload, state) => {
  if (!payload || !payload.action) return state;
  switch(payload.action) {
    case 'SOCKET_ADD_TEAM':
      const collection = addTeamToCollection(buildTeamModel(payload.data), state.get('collection'));
      return state.set('collection', collection);
    default:
      return state;
  }
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_TEAMS:
      return state.set('status', 'loading');
    case RECEIVE_TEAMS:
      return state.withMutations(state => {
        state.set('collection', sortTeamCollection(buildTeamCollectionMap(action.teams)));
        state.set('status', 'loaded');
      });
    case SOCKET_ROOM_NOTIFICATION:
      return handleSocketRoomNotification(action.payload, state);
    default:
      return state;
  }
}
