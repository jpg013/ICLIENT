import { Map, OrderedMap } from 'immutable';
import { generateUUID } from '../library/index';

/**
 * User States
 */
const modelStates = {
  dirty: 'dirty',
  persisting: 'persisting',
  persisted: 'persisted',
  new: 'new'
}

const teamModel = Map({
  type: 'team',
  name: '',
  neo4jConnection: '',
  neo4jAuth: '',
  imageURL: ''
})

/**
 * Creates a new team model
 */

const buildNewTeamModel = () => {
  console.log(generateUUID());
  return teamModel.merge(Map({state: modelStates.new, tmpId: generateUUID()}));
}

const getSaveProps = model => {
  return {
    name: model.get('name'),
    neo4jConnection: model.get('neo4jConnection'),
    neo4jAuth: model.get('neo4jAuth'),
    imageURL: model.get('imageURL')
  }
}

/**
 * returns whether or not the model is valid
 */
const isModelValid = model => {
  if (!model) return;
  if (!model.get('name') || model.get('name').trim() < 3) {
    return false;
  }
  if (!model.get('neo4jConnection').trim() || !model.get('neo4jAuth').trim()) {
    return false;
  }
  return true;
}

export {
  isModelValid,
  buildNewTeamModel,
  getSaveProps
}
