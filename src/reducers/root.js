import {combineReducers} from 'redux';

import namesReducer from './names'

export default combineReducers({
  namesRecuder: namesReducer
});