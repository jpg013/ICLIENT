import { Map, List, OrderedMap } from 'immutable';

export default Map({
  auth: Map({
    user: undefined,
    status: undefined
  }),
  userReports: Map({
    collections: OrderedMap()
  }),
  admin: Map({
    teams: Map({
      isLoading: false,
      list: List()
    }),
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
