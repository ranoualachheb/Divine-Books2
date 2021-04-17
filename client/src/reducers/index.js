import { combineReducers } from 'redux';

import booksReducer from './books'
import authReducer from './auth'

export default combineReducers({ booksReducer,authReducer });
