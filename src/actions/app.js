import { HYDRATE_APP } from './types';

const hydrateApp = data => ({type: HYDRATE_APP, data})

export {
  hydrateApp
}
