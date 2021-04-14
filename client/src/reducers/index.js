import { combineReducers } from 'redux';

import booksReducer from './books'
import authReducer from './user'

export default combineReducers({ booksReducer,authReducer });
