import { IO_SYNC_USER } from './types';

const ioSyncUser = data => ({type: IO_SYNC_USER, user: data.user});

export { ioSyncUser }
