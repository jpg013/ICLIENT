import { OPEN_SIDE_DOCK, CLOSE_SIDE_DOCK } from './types';

const openSideDock = model => ({
  type: OPEN_SIDE_DOCK,
  model: model
});

const closeSideDock = () => ({type: CLOSE_SIDE_DOCK});

export {
  openSideDock,
  closeSideDock
}
