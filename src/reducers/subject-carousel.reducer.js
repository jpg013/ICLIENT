import InitialState from './initial-state';
import { List } from 'immutable';
import { REQUEST_SUBJECTS, RECEIVE_SUBJECTS, SETUP_CAROUSEL, RESET_CAROUSEL, SLIDE_CAROUSEL} from '../actions/types';

const defaultState = InitialState.get('subjectCarousel');

const calculateExpectedSliderPosition = (index, slideDistance) => {
  return (index * slideDistance) + (slideDistance / 2);
}

const getCarouselIndex = (curIndex, inc, carouselLength) => {
  let newIndex = curIndex + inc;
  newIndex  = newIndex < 0 ? 0 : newIndex;
  newIndex = newIndex >= carouselLength ? carouselLength : newIndex;
  return newIndex;
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case SETUP_CAROUSEL:
      return state.set('cardWidth', action.payload.cardWidth).set('carouselWidth', action.payload.carouselWidth);
    case RESET_CAROUSEL:
      return defaultState;
    case SLIDE_CAROUSEL:
      state = state.set('index', getCarouselIndex(state.get('index'), action.payload, 100));
      return state.set('sliderPosition', calculateExpectedSliderPosition(state.get('index'), state.get('slideDistance')));
    case REQUEST_SUBJECTS:
      return state;
    case RECEIVE_SUBJECTS:
      return state.set('subjects', List(action.payload));
    default:
      return state;
  }
}
