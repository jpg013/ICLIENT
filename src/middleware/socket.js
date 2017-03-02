import io from 'socket.io-client';
import { getAuthToken } from '../services/storage.service';
import { IO_REQUEST_USER, IO_SYNC_USER } from '../actions/types';
import { ioSyncUser } from '../actions/socket.io.actions';

let socket;

const onSocketConnect = () => {
  if (!socket) { return; }
  const authToken = getAuthToken();
  if (authToken) {
    socket.emit(IO_REQUEST_USER, {authToken})
  }
}

const connectSocket = (dispatch) => {
  socket = io.connect();
  socket.on('connect', onSocketConnect);
  socket.on(IO_SYNC_USER, data => dispatch(ioSyncUser(data)))
}

export { connectSocket }
