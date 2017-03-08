import { Map, List, OrderedMap } from 'immutable';

export default Map({
  dock: Map({ }),
  graphFilter: Map({
    state: 'closed',
    geography: undefined
  }),
  influencers: Map({}),
  route: Map({}),
  subjectCarousel: Map({
    index: 0,
    cardWidth: undefined,
    subjects: List(),
    carouselWidth: undefined,
    isFetching: false
  }),
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
    })
  }),
  socketRooms: Map({
    admin: Map()
  })
});
