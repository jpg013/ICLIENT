import { SOCKET_SYNC_USER, SOCKET_ROOM_NOTIFICATION } from './types';

const socketSyncUser = user => ({type: SOCKET_SYNC_USER, user});
const socketRoomNotification = payload => {
  return {
    type: SOCKET_ROOM_NOTIFICATION,
    payload
  }
}

export { socketSyncUser, socketRoomNotification }
