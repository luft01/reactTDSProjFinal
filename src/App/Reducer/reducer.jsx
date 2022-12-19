import { CLICK_UPDATE_VALUE } from '../Action/actionTypes';
const initialState = {
  newValue: 'true'
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


  export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
      case CLICK_UPDATE_VALUE:
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
  };