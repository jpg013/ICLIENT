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
    isLoading: false
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
  slider: Map({
    name: undefined,
    model: undefined
  })
});
