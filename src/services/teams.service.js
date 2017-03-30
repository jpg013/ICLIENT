import { Map, OrderedMap } from 'immutable';
import { generateUUID } from '../library/index';
import moment from 'moment';

/**
 * User States
 */
const modelStates = {
  dirty: 'dirty',
  persisting: 'persisting',
  pristine: 'pristine',
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
  return teamModel.merge(Map({state: modelStates.pristine, tmpId: generateUUID()}));
}

/**
 * Creates an existing team model
 */

 const buildTeamModel = data => {
   const createdDate = new Date(data.createdDate);
   const lastActivityDate = data.lastActivityDate ? new Date(data.lastActivityDate) : undefined;
   const formattedLastActivityDate = lastActivityDate ? moment(lastActivityDate).format('MMMM Do, YYYY') : 'never';
   const formattedCreatedDate = moment(createdDate).format('MMMM Do, YYYY');
   const dataMap = Map({
    ...data,
     createdDate,
     formattedCreatedDate,
     lastActivityDate,
     formattedLastActivityDate,
   });

   return teamModel
    .merge(Map({state: modelStates.pristine}))
    .merge(dataMap);
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

const buildTeamCollectionMap = (data) => {
  if (!data) { return; }
  return data
    .map(buildTeamModel)
    .reduce((acc, cur) => {
      return acc.set(cur.get('id'), cur);
    }, OrderedMap());
}

export {
  isModelValid,
  buildNewTeamModel,
  getSaveProps,
  buildTeamModel,
  buildTeamCollectionMap
}
