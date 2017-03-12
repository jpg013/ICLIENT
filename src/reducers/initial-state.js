import { Map, List, OrderedMap } from 'immutable';

export default Map({
  auth: Map({
    user: undefined,
    isFetching: false,
    error: undefined,
    isAuthenticated: false
  }),
  reporting: Map({
    reportSets: OrderedMap()
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
});
