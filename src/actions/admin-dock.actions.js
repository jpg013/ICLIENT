import { OPEN_ADMIN_DOCK , CLOSE_ADMIN_DOCK } from './types';

const openAdminDock = model => ({
  type: OPEN_ADMIN_DOCK,
  model: model
});

const closeAdminDock = () => ({type: CLOSE_ADMIN_DOCK});

export {
  openAdminDock,
  closeAdminDock
}
