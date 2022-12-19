import { clickReducer } from './reducer'; 
import { otherReducer } from './otherReducer'; 
import { combineReducers } from 'redux';
export const Reducers = combineReducers({ 
  clickState: clickReducer, 
  otherState: otherReducer 
});