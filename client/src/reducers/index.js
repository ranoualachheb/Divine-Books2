import { combineReducers } from 'redux';

import booksReducer from './books'
import authReducer from './auth'
import users from './user'

export default combineReducers({ booksReducer,authReducer, users });
