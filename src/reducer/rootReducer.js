import React from 'react';
import {combineReducers} from 'redux';
import { bookmarkReducer, homeScreenReducer, oneWayReducer, roundTripReducer, } from '../modules/flightBooking';


export const rootReducer =
  combineReducers(
      {
          homeScreenReducer,
          bookmarkReducer,
          oneWayReducer,
          roundTripReducer
      }
  );

