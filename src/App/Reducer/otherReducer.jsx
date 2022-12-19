import { CLICK_UPDATE_VALUE2 } from '../Action/actionTypes';
const initialState = {
  newValue: 'suahsuahsuha!'
};
  /* export const clickReducer = (state = initialState, action) => { 
    switch (action.type) { 
      case 'CLICK_UPDATE_VALUE': 
        return { 
          ...state, 
          newValue: action.newValue 
        }; 
      default: 
        return state;
    } 
  }; */


  export const otherReducer = (state = initialState, action) => {
    switch (action.type) {
      case CLICK_UPDATE_VALUE2:
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
  };