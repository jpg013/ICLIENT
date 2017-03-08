import { SOCKET_SYNC_USER, SOCKET_ROOM_NOTIFICATION } from './types';

const socketSyncUser = user => ({type: SOCKET_SYNC_USER, user});
const socketRoomNotifcation = (room, data) => {
  return {
    type: SOCKET_ROOM_NOTIFICATION,
    room,
    update: data
  }
}

export { socketSyncUser, socketRoomNotifcation }
