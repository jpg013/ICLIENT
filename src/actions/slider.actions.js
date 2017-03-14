import { OPEN_SLIDER, CLOSE_SLIDER } from './types';

const openSlider = (name, model) => ({ type: OPEN_SLIDER, name, model });
const closeSlider = () => ({ type: CLOSE_SLIDER });

export {
  openSlider,
  closeSlider
}
