import * as types from '../constants/action-types';

export const dockStateAction = (state) => ({
  type: types.DOCK_STATE,
  payload: state
});
