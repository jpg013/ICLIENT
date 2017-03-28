import { Map, OrderedMap } from 'immutable';

/**
 * User States
 */
const modelStates = {
  dirty: 'dirty',
  persisting: 'persisting',
  persisted: 'persisted',
  clean: 'clean',
  new: 'new'
}

const teamModel = Map({ type: 'team' })

/**
 * Creates a new team model
 */

const buildNewTeamModel = () => teamModel.merge(Map({state: modelStates.new}));

export {
  buildNewTeamModel
}
