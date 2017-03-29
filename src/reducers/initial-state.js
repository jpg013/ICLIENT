import { Map, OrderedMap } from 'immutable';

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
  adminDock: Map({
    isOpen: false,
    persistedModel: undefined
  })
});
