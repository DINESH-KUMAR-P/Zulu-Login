import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducers';
import { isProd } from '../../config/Config';

export default function configureAppStore(preloadedState = {}) {
  return configureStore({
    reducer,
    preloadedState,
    devTools: true,
  });
}
