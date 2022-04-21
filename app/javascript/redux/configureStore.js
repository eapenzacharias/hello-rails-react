import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import messageReducer from './greeting/greeting';

const reducer = combineReducers({ message: messageReducer });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;