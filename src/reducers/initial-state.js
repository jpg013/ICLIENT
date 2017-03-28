import { Map, List, OrderedMap } from 'immutable';

export default Map({
  auth: Map({
    user: undefined,
    status: undefined
  }),
  userReports: Map({
    collection: OrderedMap()
  }),
  adminTeams: Map({
    collection: OrderedMap(),
    status: 'not-loaded'
  }),
  admin: Map({
    slider: Map({
      status: 'not-submitted',
      name: undefined
    })
  }),
  users: Map({
    map: OrderedMap()
  }),
  sideDock: Map({
    originalModel: undefined,
    updatedModel: undefined
  })
});
