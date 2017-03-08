import sockjs from 'sockjs-client';
import { getAuthToken } from '../services/storage.service';
import { socketSyncUser, socketRoomNotifcation } from '../actions/socket.actions';
import { storage } from '../services/storage.service';
import { List } from 'immutable';

function initSockJS(store) {
  /**
   * Interval variables
   */
  let io;
  let status = 'disconnected';
  let pending = List();
  const socketURL = 'http://localhost:3000/_sock';

  const onSocketOpen = () => {
    status = 'connected';
    pending.forEach(cur => sendMessage(cur));
  }

  const onSocketClose = () => {
    console.log('closing the socket');
  }

  const onSocketMessage = e => {
    const msg = JSON.parse(e.data);
    switch(msg.event) {
      case 'SOCKET_SYNC_USER':
        return store.dispatch(socketSyncUser(msg.payload));
      case 'SOCKET_ROOM_NOTIFICATION':
        return store.dispatch(socketRoomNotifcation(msg.room, msg.data));
      default:
        return;
    }
  }

  const addPendingMsg = msg => {
    pending = pending.push(msg);
  }

  const sendMessage = msg => {
    if (!io || status ==='disconnected') { return; }
    if (status === 'connecting') {
      return addPendingMsg(msg);
    };
    io.send(JSON.stringify(msg));
  }

  const connectSocket = () => {
    if (status === 'connected' || status === 'connecting') { return; }
    status = 'connecting';
    io = new sockjs(socketURL);
    io.onopen = onSocketOpen;
    io.onclose = onSocketClose;
    io.onmessage = onSocketMessage;
  }

  const identifySocket = () => {
    const token = getAuthToken();
    if (!token) { return; }
    const msg = {
      event: 'SOCKET_IDENTIFY_CONNECTION',
      payload: token
    };
    sendMessage(msg);
  }

  const joinRoom = (roomName) => {
    const msg = {
      event: 'SOCKET_JOIN_ROOM',
      payload: getAuthToken()
    };
    sendMessage(msg);
  }

  /**
   * Expose API
   */
  return {
    joinRoom,
    identifySocket,
    connectSocket
  }
}

export  {
  initSockJS
}
