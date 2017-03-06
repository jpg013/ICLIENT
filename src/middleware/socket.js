import sockjs from 'sockjs-client';
import { getAuthToken } from '../services/storage.service';
import { IO_REQUEST_USER, IO_SYNC_USER } from '../actions/types';
import { ioSyncUser } from '../actions/socket.actions';

let io = new sockjs('http://localhost:3000/echo');

const connectSocket = store => {
  io.onopen = function() {
    const user = store.getState().getIn(['auth', 'user']);
    if (user) {
      identifySocket(user.toJS());
    }

  }

  io.onclose = function() {
    console.log('closing the socket');
  }
}

const identifySocket = (user) => {
  console.log(user);
  const payload = {
    message: 'SOCKET_IDENTIFY_USER',
    data: user.id
  };
  io.send(JSON.stringify(payload));
}

export {
  connectSocket
 }
