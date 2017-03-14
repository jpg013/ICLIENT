import { Map, OrderedMap } from 'immutable';

/**
 * User States
 */
const userStates = {
  dirty: 'dirty',
  persisting: 'persisting',
  persisted: 'persisted',
  clean: 'clean',
  new: 'new'
}

const userModel = Map({ type: 'user' })

/**
 * Creates a completely new, non-persisted user map
 */
const buildDirtyUserModel = () => userModel.merge(Map({ state: userStates.new }));
const buildUserModel = data => userModel.merge(Map({state: userStates.clean, ...data}));

const buildUserMap = userData => {
  return userData.reduce((acc, cur) => {
    const userModel = buildUserModel(cur);
    return acc.set(userModel.get('id'), userModel);
  }, OrderedMap());
}

export {
  buildDirtyUserModel,
  buildUserModel,
  buildUserMap
}
