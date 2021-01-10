import {combineReducers} from 'redux';

import namesReducer from './names'
import filterReducer from './filter'

// Combines all reducers to one
export default combineReducers({
  namesRecuder: namesReducer,
  filterReducer: filterReducer
});