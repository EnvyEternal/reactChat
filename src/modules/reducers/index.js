import chatReducer from './chatReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  chatReducerState: chatReducer,
});
export default rootReducer;