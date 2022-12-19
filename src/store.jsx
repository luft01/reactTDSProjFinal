import { legacy_createStore as createStore } from'redux'; 
import {Reducers} from '../src/App/Reducer';
export const Store = createStore(Reducers);