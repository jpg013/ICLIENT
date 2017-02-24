import { Map, List } from 'immutable';

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
    error: undefined
  })
});
