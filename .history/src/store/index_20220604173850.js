import { configureStore, applyMiddleware, compose  } from '@reduxjs/toolkit';

import rootReducer from "./modules/rootReducer";

const enhancer = __DEV__ && console.tron.createEnhancer();

const store = configureStore({
  reducer: rootReducer,
  enhancers: [enhancer]
})

export default store;