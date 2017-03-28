import AuthReducer from './auth.reducer'
import UserReports from './user-reports.reducer';
//import AdminReducer from './admin.reducer';
import SocketRoomsReducer from './socket-rooms.reducer';
import UsersReducer from './users.reducer';
import SideDockReducer from './side-dock.reducer';
import AdminTeamsReducer from './admin-teams.reducer';
import InitialState from './initial-state';
import { Map } from 'immutable';

const reducers = Map({
  auth: AuthReducer,
  userReports: UserReports,
  users: UsersReducer,
  sideDock: SideDockReducer,
  adminTeams: AdminTeamsReducer
});

const rootReducer = (state = InitialState, action) => {
  reducers.forEach((reducer, key) => {
    const oldState = state.get(key);
    const newState = reducer(oldState, action);
    state = state.set(key, newState);
  });
  return state;
}

export default rootReducer;
