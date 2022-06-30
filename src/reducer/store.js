// import thunkMiddleWare from "redux-thunk";
// import { createStore , applyMiddleware, compose} from "redux";
// import { rootReducer } from ".";
// import logger from "redux-logger";


// const enhancers=[
//     applyMiddleware(
//         logger, thunkMiddleWare,
//     )
// ]

// const enhancer = compose(...enhancers)
// export const store = createStore(rootReducer,{},enhancer)

import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from ".";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistStore, persistReducer } from 'redux-persist';




const enhancers = [
  applyMiddleware(
    thunkMiddleware,
    logger
  ),
];

const enhancer = compose(...enhancers);

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['bookmarkReducer' ],
// };

// const persistedReducer = persistReducer(persistConfig,rootReducer);

export const STORE = createStore(rootReducer, {}, enhancer);
// export const persistor = persistStore(STORE);
